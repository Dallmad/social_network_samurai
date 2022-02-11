import {ActionsTypes, PostPropsType} from "./store";

const ADD_POST_CALLBACK = 'ADD-POST-CALLBACK'
const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE-NEW-TEXT-CALLBACK'     //UPDATE_NEW_POST_TEXT on js

export const profileReducer = (state:
                                   {
                                       posts: PostPropsType[],
                                       messageForNewPost: string
                                   },
                               action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST-CALLBACK":
            const newPost: PostPropsType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.messageForNewPost = '';
            return state;
        case "CHANGE-NEW-TEXT-CALLBACK":
            state.messageForNewPost = action.newText;
            return state;
        default:
            return state
    }
}
export const addPostCallbackAC = (postText: string) => ({
    type: ADD_POST_CALLBACK,
    postText: postText
}) as const
export const changeNewTextCallbackAC = (newText: string) => ({
    type: CHANGE_NEW_TEXT_CALLBACK,
    newText: newText
}) as const