import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';


let store = {
	_state: {
		profilePage:{
			postsData: [
				{id: 1, message: 'How are you', likesCount: 12},
				{id: 1, message: 'it s my first post', likesCount: 106},
				{id: 1, message: 'Yo', likesCount: 12},
				{id: 1, message: 'User send penis', likesCount: 3092},
				{id: 1, message: 'Yo', likesCount: 1}
			],
			newPostText: 'it-kamasutra.com',
		},
		dialogsPage: {
			dialogsData: [
				{id: 1, name: 'Dimych'},
				{id: 2, name: 'Andrey'},
				{id: 3, name: 'Sveta'},
				{id: 4, name: 'Sasha'},
				{id: 5, name: 'Victor'},
				{id: 6, name: 'Valera'},
			],

			messagesData: [
				{id: 1, message: 'Hi'},
				{id: 1, message: 'Would you like my penis?'},
				{id: 1, message: 'Yo'},
				{id: 1, message: 'User send penis'},
				{id: 1, message: 'Yo'}
			],
			newMessageBody: ""
		},
	
		sidebar: {

		},
	},

	getState(){
		return this._state;
	},

	_callSubscriber(state){
		console.log("state Changed");
	},


	subscribe(observer) {
		
		this._callSubscriber = observer;
		console.log('ee')
	},

	dispatch(action){
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
}



export default store;

window.store = store;