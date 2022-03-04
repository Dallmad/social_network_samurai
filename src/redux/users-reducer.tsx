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
    users: [
        {id: 1, fullName: 'Dzmitry', status: 'I am a shark', location: {city : 'Minsk',country: 'Belarus'}},
        {id: 2, fullName: 'Sasha', status: 'I am a big shark', location: {city : 'Moscow',country: 'Russia'}},
        {id: 3, fullName: 'Andrew', status: 'I am a small shark', location: {city : 'Kiev',country: 'Ukraine'}},
    ],
    messageForNewPost: ''
}

export const usersReducer = (state: ProfilePageType = initialState,
                             action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {

        default:
            return state
    }
}
export const addPostCallbackAC = (postText: string) => ({
    type: ADD_POST_CALLBACK,
    postText: postText
}) as const
