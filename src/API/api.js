import * as axios from 'axios';


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": '0e85d029-5c9c-403b-8707-c3f13c704c33'
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10){
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => {
			return response.data;
		});
	},

	follow(userId){
		return instance.post(`follow/${userId}`)
	},

	unfollow(userId){
		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		return profileAPI.getProfile(userId);
	}
}


export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId){
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status){
		return instance.put(`profile/status`, {status: status});
	}
}


export const authAPI = {
	me(){
		return instance.get(`auth/me`)
	}
}

export const LoginAPI = {
	sendLogin(formData){
		console.log(formData)
		instance.post('auth/login', formData).then(response => {
			console.log(response)
		})
	}
}