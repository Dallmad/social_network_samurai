import s from './Post.module.css'
import React from "react";
import {PostPropsType} from "../../../../redux/ProfileReducer";


export const Post:React.FC<PostPropsType> = (props) => {
    return <div className={s.item}>
        <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlTxsDwfsDKdtp0YNIaQfZKwHmDDw7sSAhQeGscSWEFxkQvihl95Fjp3PVzAzCQ_vyXA&usqp=CAU'/>
        {props.message}
        <div>
            <span>like {props.likesCount}</span>
        </div>
    </div>
}