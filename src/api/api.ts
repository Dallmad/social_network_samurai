import axios, {AxiosResponse} from 'axios';

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

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>('auth/login', data)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    }
}
export const profileAPI = {
    getProfile(userId: string | undefined) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string | undefined) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}