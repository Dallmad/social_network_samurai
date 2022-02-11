import {ActionsTypes, DialogItemPropsType, MessagePropsType} from "./state";

export const CHANGE_NEW_MESSAGE_BODY_CALLBACK = 'CHANGE-NEW-MESSAGE_BODY-CALLBACK'     //UPDATE_NEW_MESSAGE_BODY on js
export const SEND_MESSAGE_CALLBACK = 'SEND_MESSAGE_CALLBACK'       //SEND_MESSAGE_CREATOR on js

export const dialogsReduser = (state: {
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