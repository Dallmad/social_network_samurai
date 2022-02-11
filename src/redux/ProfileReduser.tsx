import {ActionsTypes, PostPropsType} from "./state";

export const ADD_POST_CALLBACK = 'ADD-POST-CALLBACK'
export const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE-NEW-TEXT-CALLBACK'     //UPDATE_NEW_POST_TEXT on js

export const profileReduser = (state:{ posts: PostPropsType[], messageForNewPost: string },action:ActionsTypes) => {
    if (action.type === ADD_POST_CALLBACK) {
        // const postText = this._state.profilePage.messageForNewPost
        const newPost: PostPropsType = {
            id: 5,
            message: action.postText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.messageForNewPost = ''
        //this._onChange()
    } else if (action.type === CHANGE_NEW_TEXT_CALLBACK) {
        state.messageForNewPost = action.newText   //updateNewPostText
        //this._onChange()
    }

    return state
}