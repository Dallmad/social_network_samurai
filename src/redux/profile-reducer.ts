import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';
import {toggleIsFollowingProgress, unfollowSuccess} from './users-reducer';

const ADD_POST_CALLBACK = 'ADD_POST_CALLBACK'
const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE_NEW_TEXT_CALLBACK'     //UPDATE_NEW_POST_TEXT on js
const SET_USER_PROFILE = 'SET_USER_PROFILE'     //UPDATE_NEW_POST_TEXT on js


export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostPropsType[]
    messageForNewPost: string
    profile: null
}

export type ProfileActionsTypes =
    ReturnType<typeof addPostCallback> |
    ReturnType<typeof changeNewTextCallback> | ReturnType<typeof setUserProfile>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It"s my first post.', likesCount: 23},
    ],
    messageForNewPost: '',
    profile: null
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
export const setUserProfile = (profile: null) => ({
    type: SET_USER_PROFILE,
    profile
}) as const

//Thunk
/*
export const getProfile = (userId: string | undefined) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}*/
