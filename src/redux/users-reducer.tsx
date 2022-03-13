const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type UsersPageType = {
    users: UserType[]
}
export type UsersActionTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState = {
    users: []
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
            return {...state, users: [...state.users,...action.users]}
        }
        default:
            return state
    }
}
export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users}) as const
