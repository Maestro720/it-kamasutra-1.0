import React from 'react';
import style from './photoCards.module.css';
import {NavLink} from 'react-router-dom';
import {Formik} from 'formik';


const Photo = (props) => {
	if(props.viewPhoto){
		return <div>
			<div className={style.btn} onClick={() => {props.closePhoto()}}>
				<img src='https://img.icons8.com/ios/452/back--v1.png' />
			</div>	
				<img src={props.viewPhoto} />
			</div>
	}else if(props.uploadingPhoto){
		return <div className={style.form}>
			<div className={style.btn} onClick={() => {props.sendPhoto(false)}}>
				<img src='https://img.icons8.com/ios/452/back--v1.png' />
			</div>
				<Formik	initialValues={{linkPhoto: '', description: ''}} onSubmit={(values, {setSubmitting, resetForm}) => {				
					let action = {
						linkPhoto: values.linkPhoto,
					 	description: values.description
					}
					props.uploadPhoto(action)
					resetForm()
				}}>
					{({values, handleSubmit, handleChange}) => (
						<form onSubmit={handleSubmit}>
							<div><input
								placeholder='Описание'
								type="textarea"
								name='description'
								value={values.description}
								onChange={handleChange}
							/></div>
							<div><input
								placeholder='URL картинки'
								type="textarea"
								name='linkPhoto'
								value={values.linkPhoto}
								onChange={handleChange}
							/></div>
							<button 
								className={style.uploadButton}
								onClick={handleSubmit}
								type='submit'
							>Upload</button>
							</form>
					)}
					</Formik>
				</div>
	}
		return <div>
				<button onClick={() => {props.sendPhoto(true)}}>Загрузить фото</button>
				<div className={style.photos}>
					<PhotoCards photoCards={props.photoCards} openPhoto={props.openPhoto}/>
				</div>
			</div>	




}

export const PhotoCards = (props) => {
	return props.photoCards.map(p => {
		return <NavLink to={'/Photo/' + p.linkPhoto} onClick={() => {props.openPhoto(p.linkPhoto)}}><img className={style.card
			} src={p.linkPhoto}/></NavLink>
	})
}



export default Photo;


