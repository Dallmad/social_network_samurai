
const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type LocationType = {
    city: string
    country: string
}
type UserPhotoType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: UserPhotoType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type UsersActionTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC>

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1

}

export const usersReducer = (state: UsersPageType = initialState,
                             action: UsersActionTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } return u
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        } return u
                    }
                )
            }
        case SET_USERS: {
            return {...state, users:action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount:action.totalUsersCount}
        }
        default:
            return state
    }
}
export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount}) as const

