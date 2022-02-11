import s from './Dialogs.module.css';
import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { DialogsPageType} from "../../redux/DialogsReducer";

type DialogsType = {
    dialogs: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage:()=>void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogElements = props.dialogs.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>)
    const messageElements = props.dialogs.messages.map(m =>
        <Message id={m.id} message={m.message}/>)
    const newMessageBody = props.dialogs.newMessageBody
    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'/>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}