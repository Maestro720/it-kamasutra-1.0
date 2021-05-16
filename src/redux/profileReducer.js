import {usersAPI} from '../API/api';
import {profileAPI} from '../API/api';


const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

let initialState = {
			postsData: [
				{id: 1, message: 'How are you', likesCount: 12},
				{id: 1, message: 'it s my first post', likesCount: 106},
				{id: 1, message: 'Yo', likesCount: 12},
				{id: 1, message: 'User send penis', likesCount: 3092},
				{id: 1, message: 'Yo', likesCount: 1}
			],
			newPostText: 'it-kamasutra.com',
			profile: null,
			status: ""
}

const profileReducer = (state = initialState, action) => {
	switch(action.type){
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: ""
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.text
			}
		}
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
		case DELETE_POST: {
			return {...state, postsData: state.postsData.filter(p => p.id != action.postId)}
		}
		case SET_STATUS: {
			return {...state,
			 status: action.status
			}
		}
		default:
			return state;
		}
} 


export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUserProfile = (userId) => async (dispatch) => {
		let response = await usersAPI.getProfile(userId);
			dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
		let response = await profileAPI.getStatus(userId);
		dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
		let response = await profileAPI.updateStatus(status);
			if(response.data.resultCode === 0){
				dispatch(setStatus(status));
			}
}

export const updatePostTextActionCreator = (text) => ({type:'UPDATE-NEW-POST-TEXT', text: text})


export default profileReducer;