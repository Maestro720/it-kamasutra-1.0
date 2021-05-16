import React from 'react';
import Photo from './Photo';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {sendPhotoAC, openPhotoAC, closePhotoAC, uploadPhotoAC} from '../../redux/photoReducer';
import {withRouter} from 'react-router-dom';




let mapStateToProps = (state) => {
	return {
		photoCards: state.photos.photoCards,
		viewPhoto: state.photos.viewPhoto,
		uploadingPhoto: state.photos.uploadingPhoto,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendPhoto: (action) => {
			dispatch(sendPhotoAC(action))
		},
		openPhoto: (action) => {
			dispatch(openPhotoAC(action))
		},
		closePhoto: () => {
			dispatch(closePhotoAC())
		},
		uploadPhoto: (action) => {
			dispatch(uploadPhotoAC(action))
		}
	}
}



export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Photo);