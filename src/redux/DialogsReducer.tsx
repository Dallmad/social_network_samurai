import {ActionsTypes, DialogItemPropsType, MessagePropsType} from "./store";

const CHANGE_NEW_MESSAGE_BODY_CALLBACK = 'CHANGE-NEW-MESSAGE_BODY-CALLBACK'     //UPDATE_NEW_MESSAGE_BODY on js
const SEND_MESSAGE_CALLBACK = 'SEND_MESSAGE_CALLBACK'       //SEND_MESSAGE_CREATOR on js

export const dialogsReducer = (state: {
                                   dialogs: DialogItemPropsType[],
                                   messages: MessagePropsType[],
                                   newMessageBody: string
                               },
                               action: ActionsTypes) => {
    switch (action.type) {
        case "CHANGE-NEW-MESSAGE_BODY-CALLBACK":
            state.newMessageBody = action.body
            return state
        case "SEND_MESSAGE_CALLBACK":
            let body = state.newMessageBody
            state.messages.push({id: 4, message: body})
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}
export const changeNewMessageBodyCallbackAC = (body: string) => ({
    type: CHANGE_NEW_MESSAGE_BODY_CALLBACK,
    body: body
}) as const
export const sendMessageCallbackAC = (body: string) => ({
    type: SEND_MESSAGE_CALLBACK,
    body: body
}) as const