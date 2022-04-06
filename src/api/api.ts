import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'efb8825f-df2b-4d2c-b6cc-3340575a86da'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})
    }
}

export const follow = (uID:number) => {
    instance.post(`follow/${uID}`)
        .then(response => {return response.data})
}
export const unFollow = (uID:number) => {
    instance.delete(`follow/${uID}`)
        .then(response => {return response.data})
}