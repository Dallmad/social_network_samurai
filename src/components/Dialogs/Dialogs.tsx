import s from './Dialogs.module.css';
import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from './DialogsContainer';
import {Navigate} from 'react-router-dom';


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogElements = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messageElements = props.dialogsPage.messages.map(m =>
        <Message id={m.id} message={m.message} key={m.id}/>)
    const newMessageBody = props.dialogsPage.newMessageBody
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
