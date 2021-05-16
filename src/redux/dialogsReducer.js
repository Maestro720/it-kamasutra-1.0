const UPDATE_NEW_MESSAGE_BODY = 'dialogs/UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
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
		}


const dialogsReducer = (state = initialState, action) => {
	switch(action.type){
		case UPDATE_NEW_MESSAGE_BODY:{
			return {
				...state,
				newMessageBody: action.body
			};
		}
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				messagesData: [...state.messagesData, {id: 6, message: body}],
				newMessageBody: ''
			};
		default:
			return state;
	}

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body})


export default dialogsReducer;