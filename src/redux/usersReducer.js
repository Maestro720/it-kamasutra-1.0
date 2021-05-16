import {usersAPI} from './../API/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
			users: [],
			pageSize: 100,
			totalUsersCount: 14,
			currentPage: 1,
			isFetching: false,
			followingInProgress: []
		}
const usersReducer = (state = initialState, action) => {
	switch(action.type){
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if(u.id === action.userID){
						return {...u, followed: true}
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if(u.id === action.userID){
						return {...u, followed: false}
					}
					return u;
				})
			}
		case SET_USERS:
			return {...state, users: action.users}
		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}
		case SET_TOTAL_USERS_COUNT:
			return {...state, totalUsersCount: action.count}
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				 followingInProgress: action.isFetching 
				 ? [...state.followingInProgress, action.userId] 
				 : state.followingInProgress.filter(id => id != action.userId)
				}
		default:
			return state;
		}
} 

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(currentPage));		
			let data = await usersAPI.getUsers(currentPage, pageSize)
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
	}	
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
		dispatch(toggleFollowingProgress(true, userId));
		let response = await apiMethod(userId);
		if(response.data.resultCode == 0){
			dispatch(actionCreator(userId));
		}
		dispatch(toggleFollowingProgress(false, userId));
}


export const follow = (userId) => {
	return async (dispatch) =>{
		let apiMethod = usersAPI.follow.bind(usersAPI);
		let actionCreator = followSuccess;
		followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
	}	
}


export const unfollow = (userId) => {
	return async (dispatch) =>{
		let apiMethod = usersAPI.unFollow.bind(usersAPI);
		let actionCreator = unfollowSuccess;
		followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
	}	
}


export default usersReducer;