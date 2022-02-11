import s from '../Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import {DialogItemPropsType} from "../../../redux/store";

export const DialogItem:React.FC<DialogItemPropsType> = (props) => {
    const path = '/messages/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink className={({isActive}) => isActive ? s.active : s.dialog} to={path}>{props.name}</NavLink>
    </div>
}
