import s from '../Dialogs.module.css';
import React from "react";
import {MessagePropsType} from "../../../redux/DialogsReducer";



export const Message:React.FC<MessagePropsType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}


