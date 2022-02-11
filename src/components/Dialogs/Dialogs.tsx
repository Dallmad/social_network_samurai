import s from './Dialogs.module.css';
import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogItemPropsType, MessagePropsType,} from "../../redux/state";
import {changeNewMessageBodyCallbackAC, sendMessageCallbackAC} from "../../redux/DialogsReduser";

type DialogsType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogElements = props.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>)
    const messageElements = props.messages.map(m =>
        <Message id={m.id} message={m.message}/>)
    const newMessageBody = props.newMessageBody
    const onSendMessageClick = () => {
        props.dispatch(sendMessageCallbackAC(props.newMessageBody))
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageBodyCallbackAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}