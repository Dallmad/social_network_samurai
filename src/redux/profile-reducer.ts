import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';


const ADD_POST_CALLBACK = 'ADD_POST_CALLBACK'
const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE_NEW_TEXT_CALLBACK'     //UPDATE_NEW_POST_TEXT on js
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS= 'SET_STATUS'
//const UPDATE_STATUS= 'UPDATE_STATUS'



export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostPropsType[]
    messageForNewPost: string
    profile: null
    status: string
}

export type ProfileActionsTypes =
    ReturnType<typeof addPostCallback>
    | ReturnType<typeof changeNewTextCallback> | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus> //| ReturnType<typeof updateStatus>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It"s my first post.', likesCount: 23},
    ],
    messageForNewPost: '',
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState,
                               action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST_CALLBACK:
            const newPost: PostPropsType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                posts:[...state.posts, newPost],
                messageForNewPost:''
            }
        case CHANGE_NEW_TEXT_CALLBACK:
            return {...state, messageForNewPost: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        /*case UPDATE_STATUS:
            return {...state, status: action.status}*/
        default:
            return state
    }
}
export const addPostCallback = (postText: string) => ({
    type: ADD_POST_CALLBACK,
    postText
}) as const
export const changeNewTextCallback = (newText: string) => ({
    type: CHANGE_NEW_TEXT_CALLBACK,
    newText
}) as const
const setUserProfile = (profile: null) => ({
    type: SET_USER_PROFILE,
    profile
}) as const
const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
}) as const
/*const updateStatus = (status: string) => ({
    type: UPDATE_STATUS,
    status
}) as const*/

//Thunk
export const getUserProfile = (userId: string | undefined) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId: string | undefined) => (dispatch: Dispatch) => {

    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}