import React from 'react';
import s from './Dialogs.module.css';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';



let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator())
		},
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		}
	}
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect	
	)(Dialogs);