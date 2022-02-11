export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostPropsType[]
    messageForNewPost: string
}
export type ProfileActionsTypes =
    ReturnType<typeof addPostCallbackAC> |
    ReturnType<typeof changeNewTextCallbackAC>
/*type ProfileReducerType = {
    state: ProfilePageType
    action: ActionsTypes
}*/
const ADD_POST_CALLBACK = 'ADD-POST-CALLBACK'
const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE-NEW-TEXT-CALLBACK'     //UPDATE_NEW_POST_TEXT on js

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It"s my first post.', likesCount: 23},
    ],
    messageForNewPost: ''
}

export const profileReducer = (state: ProfilePageType = initialState,
                               action: ProfileActionsTypes) => {
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