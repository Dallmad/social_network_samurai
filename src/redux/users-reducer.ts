import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
    isFetching: boolean
    followingInProgress: number[]
}
export type UsersActionTypes = ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleIsFollowingProgress>

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                        }
                        return u
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress,action.userId]
                    : state.followingInProgress.filter(id => id!== action.userId)
            }
        }
        default:
            return state
    }
}
export const followSuccess = (userId: number) => ({type: FOLLOW, userId}) as const
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING, isFetching}) as const
export const toggleIsFollowingProgress = (userId: number,isFetching: boolean) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,userId, isFetching}) as const

//Thunk
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage,pageSize)
        .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            }
        )
}
export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(userId,true))
    usersAPI.follow(userId)
        .then(response => {
                if (response.data.resultCode === 0) {dispatch(followSuccess(userId))}
                dispatch(toggleIsFollowingProgress(userId,false))
            }
        )
}
export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(userId,true))
    usersAPI.unFollow(userId)
        .then(response => {
                if (response.data.resultCode === 0) {dispatch(unfollowSuccess(userId))}
                dispatch(toggleIsFollowingProgress(userId,false))
            }
        )
}