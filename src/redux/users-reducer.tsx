const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: String
    location: LocationType
}
export type UsersPageType = {
    users: UserType[]
}
export type UsersActionTypes = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState = {
    users: [
//         {
//             id: 1,
//             followed: false,
//             fullName: 'Dzmitry',
//             status: 'I am a shark',
//             location: {city: 'Minsk', country: 'Belarus'}
//         },
//         {
//             id: 2,
//             followed: true,
//             fullName: 'Sasha',
//             status: 'I am a big shark',
//             location: {city: 'Moscow', country: 'Russia'}
//         },
//         {
//             id: 3,
//             followed: false,
//             fullName: 'Andrew',
//             status: 'I am a small shark',
//             location: {city: 'Kiev', country: 'Ukraine'}
//         },
    ]
}

export const usersReducer = (state: UsersPageType = initialState,
                             action: UsersActionTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
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
            return {...state, users: [...state.users,...action.users}
        }
        default:
            return state
    }
}
export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UsersPageType) => ({type: SET_USERS, users})
