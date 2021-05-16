const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
const ADD_PHOTO = 'ADD_PHOTO';
const OPEN_PHOTO = 'OPEN_PHOTO';
const CLOSE_PHOTO = 'CLOSE_PHOTO';

let initialState = {
	photoCards: [
		{linkPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bonsai_kitten.jpg/274px-Bonsai_kitten.jpg", description: 'Котик'},
		{linkPhoto: "https://klike.net/uploads/posts/2018-11/1542784911_29.jpg", description: 'Еще котик'},
		{linkPhoto: "https://klike.net/uploads/posts/2018-11/1542784911_29.jpg", description: 'Еще котик'},
		{linkPhoto: "https://lh3.googleusercontent.com/proxy/DH0EGCoOZk22zS0DPG0-JWendlxjRQB-YUQvFQMZXwObtarMMFoqsIVACEIxv31R58JcCAGTr7cBhdc-ghsefrZtCqXCxnD5FB32", description: 'Еще котик'},
		{linkPhoto: "https://whiskas.ru/upload/medialibrary/392/%D0%9A%D0%BE%D0%B3%D0%B4%D0%B0_%D1%83_%D0%BA%D0%BE%D1%82%D0%B5%D0%BD%D0%BA%D0%B0_%D0%BE%D1%82%D1%80%D1%8B%D0%B2%D0%B0%D1%8E%D1%82%D1%81%D1%8F_%D0%B3%D0%BB%D0%B0%D0%B7%D0%BA%D0%B8_1404x879.png", description: 'Еще котик'},
		{linkPhoto: "https://klike.net/uploads/posts/2018-11/1542784911_29.jpg", description: 'Еще котик'},
	],
	viewPhoto: null,
	uploadingPhoto: false
}


const photoReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_PHOTO: 
			return {...state, uploadingPhoto: action.action}
		case OPEN_PHOTO:
			return {...state, viewPhoto: action.action}
		case CLOSE_PHOTO:
			return {...state, viewPhoto: null}
		case UPLOAD_PHOTO:
			return {...state, photoCards: [...state.photoCards, {linkPhoto: action.action.linkPhoto, description: action.action.description}]}
		default:
			return state;
	}
}

export const sendPhotoAC = (action) => ({type: ADD_PHOTO, action})
export const uploadPhotoAC = (action) => ({type: UPLOAD_PHOTO, action})

export const openPhotoAC = (action) => ({type: OPEN_PHOTO, action})
export const closePhotoAC = () => ({type: CLOSE_PHOTO})


export default photoReducer;