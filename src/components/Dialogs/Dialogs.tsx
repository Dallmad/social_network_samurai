import {DialogsPropsType} from "./DialogsPropsType";
import s from './Dialogs.module.css';
import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = (props: DialogsPropsType) => {
    let dialogs = [
        {id:1,name:'Dima'},
        {id:2,name:'Andrey'},
        {id:3,name:'Sveta'},
        {id:4,name:'Sasha'},
        {id:5,name:'Viktor'},
        {id:6,name:'Valera'},
    ]
    let messages = [
        {id:1,message:'Hi'},
        {id:2,message:'How is your it-kamasutra?'},
        {id:3,message:'Yo'},
    ]

    let dialogElements = dialogs.map( d =>
        <DialogItem name={d.name} id={d.id}/>)
    let messageElements = messages.map(m =>
        <Message message={m.message}/>)

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