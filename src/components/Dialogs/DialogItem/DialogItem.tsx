import {DialogItemPropsType} from "../DialogsPropsType";
import s from '../Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

export const DialogItem = (props:DialogItemPropsType) => {
    let path = '/dialog/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink className={({isActive}) => isActive ? s.active : s.dialog} to={path}>{props.name}</NavLink>
    </div>
}
