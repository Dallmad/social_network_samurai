import {ActionsTypes, PostPropsType} from "./state";

export const ADD_POST_CALLBACK = 'ADD-POST-CALLBACK'
export const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE-NEW-TEXT-CALLBACK'     //UPDATE_NEW_POST_TEXT on js

export const profileReduser = (state:
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
