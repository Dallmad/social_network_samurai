import s from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemPropsType, MessagePropsType} from "../../redux/state";

type DialogsType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogElements = props.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map(m =>
        <Message id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}