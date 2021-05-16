import React from 'react';
import cont from './Content.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './../MyPosts/MyPostsContainer';

const Content = (props) => {
	return <div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
       		<MyPostsContainer/>
      		</div> 
}

export default Content;