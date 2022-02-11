
import React from "react";
import {changeNewMessageBodyCallbackAC, sendMessageCallbackAC} from "../../redux/DialogsReducer";
import {store, StoreType} from "../../redux/ReduxStore";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store:StoreType
}

export const DialogsContainer: React.FC<DialogsType> = (props) => {
    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        store.dispatch(sendMessageCallbackAC(state.newMessageBody))
    }
    const onNewMessageChange = (body:string) => {
        store.dispatch(changeNewMessageBodyCallbackAC(body))
    }
    return (
       <Dialogs
           dialogs={state}
           updateNewMessageBody={onNewMessageChange}
           sendMessage={onSendMessageClick}
       />
    )
}