import s from '../Dialogs.module.css';
import React from "react";
import {MessagePropsType} from "../../../App";



export const Message:React.FC<MessagePropsType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}


