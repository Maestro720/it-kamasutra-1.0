import profileReducer, {addPostActionCreator, deletePost} from './profileReducer';
import React from 'react';


	let state = {
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


test('length post should be correct', () => {
	let action = addPostActionCreator()
	
	let newState = profileReducer (state, action)

	expect(newState.postsData.length).toBe(6)
});

test('message new post should be correct', () => {
	let action = addPostActionCreator()
	

	let newState = profileReducer (state, action)

	expect(newState.postsData[5].message).toBe('it-kamasutra.com')
});

test('after deleting length of messages should be decrement', () => {
	let action = deletePost(1);
	

	let newState = profileReducer (state, action)

	expect(newState.postsData.length).toBe(0)
});

test('after deleting length shouldn"t be decrement if id is incorrect', () => {
	let action = deletePost(1000);
	

	let newState = profileReducer (state, action)

	expect(newState.postsData.length).toBe(5)
});