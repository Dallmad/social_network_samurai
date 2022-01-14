import { MessagePropsType} from "../DialogsPropsType";
import s from '../Dialogs.module.css';
import React from "react";



export const Message = (props:MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}


