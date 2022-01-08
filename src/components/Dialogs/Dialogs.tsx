import {DialogItemPropsType, DialogsPropsType, MessagePropsType} from "./DialogsPropsType";
import s from './Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props:DialogItemPropsType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/messages/'+props.id}>{props.name}</NavLink>
    </div>
}
const Message = (props:MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
               <DialogItem name='Dima' id={1}/>
               <DialogItem name='Andrey' id={2}/>
               <DialogItem name='Sveta' id={3}/>
               <DialogItem name='Sasha' id={4}/>
               <DialogItem name='Viktor' id={5}/>
               <DialogItem name='Valera' id={6}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How is your it-kamasutra?'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}