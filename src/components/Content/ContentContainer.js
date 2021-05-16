import React from 'react';
import Content from './Content';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';
import {getStatus, updateStatus} from '../../redux/profileReducer';

 
class ContentContainer extends React.Component {
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId){
			console.log(this.props)
			userId = this.props.authorizedUserId;
			if(!userId){
				this.props.history.push('/Login')
			}
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		if(!this.props.isAuth) return <Redirect to={'/Login'} />;

		return <Content {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/> 
    }		
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId
})


export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
	)(ContentContainer)