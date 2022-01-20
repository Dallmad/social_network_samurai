import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {PostPropsType} from "../../../redux/state";

type MyPostType={
    posts:PostPropsType[]
}

export const MyPosts:React.FC<MyPostType> = (props) => {

    let postElements = props.posts.map( p=>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return <div className={s.postBlock}>
        <h3> My post </h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}