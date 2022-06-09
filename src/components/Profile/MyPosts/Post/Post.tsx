import s from './Post.module.css'
import React from "react";
import {PostPropsType} from "../../../../redux/profile-reducer";


export const Post:React.FC<PostPropsType> = (props) => {
    return <div className={s.item}>
        <img src= 'https://cdn.icon-icons.com/icons2/564/PNG/512/Comet_icon-icons.com_54192.png'/>
        {props.message}
        <div>
            <span>like {props.likesCount}</span>
        </div>
    </div>
}