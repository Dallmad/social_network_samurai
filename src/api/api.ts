import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'efb8825f-df2b-4d2c-b6cc-3340575a86da'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(uID: number) {
        return instance.post(`follow/${uID}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(uID: number) {
        return instance.delete(`follow/${uID}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId:string | undefined ) {
        return instance.get(`profile/` + userId)
    }
}
export const authAPI = {
        me() {
            return instance.get(`auth/me`)
        }
    }
