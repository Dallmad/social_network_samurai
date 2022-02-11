import {ADD_POST_CALLBACK, CHANGE_NEW_TEXT_CALLBACK, profileReduser} from "./ProfileReduser";
import {CHANGE_NEW_MESSAGE_BODY_CALLBACK, dialogsReduser, SEND_MESSAGE_CALLBACK} from "./DialogsReduser";
import {sidebarReduser} from "./SidebarReduser";

export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    message: string
    id: number
}
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type stateType = {
    profilePage: { posts: PostPropsType[], messageForNewPost: string }
    dialogsPage: { dialogs: DialogItemPropsType[], messages: MessagePropsType[], newMessageBody: string }
    sidebar: {}
}
export type StoreType = {
    _state: stateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostCallbackAC> |
    ReturnType<typeof changeNewTextCallbackAC> |
    ReturnType<typeof changeNewMessageBodyCallbackAC> |
    ReturnType<typeof sendMessageCallbackAC>


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It"s my first post.', likesCount: 23},
            ],
            messageForNewPost: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _onChange() {
        console.log('State changed')
    }, //_callSubscriber on js samurai
    getState() {
        return this._state
    },
    subscribe(callback: () => void) {
        this._onChange = callback
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReduser(this._state.sidebar, action)

        this._onChange()
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
export const changeNewMessageBodyCallbackAC = (body: string) => ({
    type: CHANGE_NEW_MESSAGE_BODY_CALLBACK,
    body: body
}) as const
export const sendMessageCallbackAC = (body: string) => ({
    type: SEND_MESSAGE_CALLBACK,
    body: body
}) as const
