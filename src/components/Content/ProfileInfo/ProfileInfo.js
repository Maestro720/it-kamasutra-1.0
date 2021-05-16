import React from 'react';
import prof from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';


const ProfileInfo = (props) => {
	console.log(props)
    if(!props.profile){
		return <Preloader />
	}
	return <div>
    		<div className={prof.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div className={prof.info}>
                    <div><span className={prof.name}>{props.profile.fullName}</span></div>
                    <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
                    <p className={prof.aboutMe}>Обо мне</p>
                    <p className={prof.aboutDescription}>{props.profile.aboutMe}</p>
                    <div className={prof.social}>
                        <span>Соцсети</span>
                        <div><span>Инстаграм: </span><a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div>
                        <div><span>Вконтакте: </span><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
                        <div><span>Github: </span><a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>
                    </div>
                    <div><span>Поиск работы: </span><a href={props.profile.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</a></div>
                </div>
    		</div>

      		</div> 
}

export default ProfileInfo;