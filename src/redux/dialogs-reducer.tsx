
export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    message: string
    id: number
}
export type DialogsPageType = {  //InitialStateType
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
}
export type DialogsActionsTypes = ReturnType<typeof changeNewMessageBodyCallbackAC> |
    ReturnType<typeof sendMessageCallbackAC>

const CHANGE_NEW_MESSAGE_BODY_CALLBACK = 'CHANGE-NEW-MESSAGE_BODY-CALLBACK'     //UPDATE_NEW_MESSAGE_BODY on js
const SEND_MESSAGE_CALLBACK = 'SEND_MESSAGE_CALLBACK'       //SEND_MESSAGE_CREATOR on js

let initialState = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState,
                               action: DialogsActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "CHANGE-NEW-MESSAGE_BODY-CALLBACK":
            return {...state, newMessageBody: action.body}
        case "SEND_MESSAGE_CALLBACK":
            return  {
                ...state,
                messages:[...state.messages, {id: 4, message: state.newMessageBody}],
                newMessageBody: ''
            }

        default:
            return state
    }
}
export const changeNewMessageBodyCallbackAC = (body: string) => ({
    type: CHANGE_NEW_MESSAGE_BODY_CALLBACK,
    body: body
}) as const
export const sendMessageCallbackAC = () => ({
    type: SEND_MESSAGE_CALLBACK,
}) as const