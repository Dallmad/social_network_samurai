import {DialogsPropsType} from "./DialogsPropsType";
import s from './Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";



export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/messages/1'>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/messages/2'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/messages/3'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/messages/4'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/messages/5'>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/messages/6'>Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}