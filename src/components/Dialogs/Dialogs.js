import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer';
import {Redirect} from 'react-router-dom';
import {Formik} from 'formik';


const Dialogs = (props) => {
	
	let state = props.dialogsPage;
	let dialogsElements = state.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/> );
	let messagesElements = state.messagesData.map(message => <Message message={message.message} key={message.id}/>);
	
	let newMessageBody = state.newMessageBody;

	let newMessage = React.createRef();

	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (body) => {
		props.updateNewMessageBody(body);
	}

	if(!props.isAuth) return <Redirect to={'/Login'} /> ;

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			<div className={s.sendArea}>
				<AddMessageForm sendMessages={onSendMessageClick} onNewMessageChange={onNewMessageChange} />
			</div>
			</div>
		</div>	
		)
}


export const AddMessageForm = (props) => {
	return	<div>
				<Formik	initialValues={{message: ''}} onSubmit={(values, {setSubmitting, resetForm}) => {
					props.onNewMessageChange(values.message);
					props.sendMessages();					
					resetForm()
				}}>
					{({values, handleSubmit, handleChange}) => (
						<form onSubmit={handleSubmit}>
							<input
								placeholder='Новое сообщение'
								type="textarea"
								name='message'
								value={values.message}
								onChange={handleChange}
							/>
							<button 
								onClick={handleSubmit}
								type='submit'
							>Send</button>
							</form>
					)}
					</Formik>
				</div>
}

export default Dialogs;

