import s from './Post.module.css'
import React from "react";
import {PostPropsType} from "../../../../redux/profile-reducer";
import comet from '../../../../assets/images/Comet_icon.png'


export const Post:React.FC<PostPropsType> = (props) => {
    return <div className={s.item}>
        <img src={comet}/>
        {props.message}
        <div>
            <span>like {props.likesCount}</span>
        </div>
    </div>
}