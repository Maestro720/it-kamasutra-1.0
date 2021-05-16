import React from 'react';
import cont from './Post.module.css';

const Post = (props) => {
	return (
    <div className={cont.item}>
      <img src="https://image.freepik.com/free-vector/mans-head-avatar-vector_83738-354.jpg" />
        <span>{props.message}</span>
        <div>
          <span>Like {props.likes}</span>
        </div>
    </div> 
  )
}

export default Post