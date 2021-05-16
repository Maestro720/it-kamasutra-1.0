import React from 'react';
import cont from './MyPosts.module.css';
import Post from './Posts/Post';
import {addPostActionCreator, updatePostTextActionCreator} from "../../redux/profileReducer";


const MyPosts = React.memo((props) => {
    let postsElements = props.postsData.map(post => <Post likes={post.likesCount} message={post.message} />)
    
    let newPostElement = React.createRef();
    
    let onAddPost = () => {
        props.addPost();
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // let text = newPostElement.current.value;
        // props.dispatch(updatePostTextActionCreator(text));
    }

    return (
 		<div className={cont.postsBlock}>
        <h3>My Posts</h3>
        <div>
         <div>
            <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText} />
         </div>
         <div>
            <button onClick={onAddPost}>Add Post</button>
            <button>Remove</button>
         </div>
         
        </div>
        <div className={cont.posts}>
         {postsElements}
      </div>
    </div>
  )
})

export default MyPosts