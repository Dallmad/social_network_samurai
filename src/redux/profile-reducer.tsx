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
                               action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST-CALLBACK":
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

        case "CHANGE-NEW-TEXT-CALLBACK":
            return {...state, messageForNewPost: action.newText}
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