import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React from "react";
import {PostPropsType} from "../../../redux/state";


type MyPostType={
    posts:PostPropsType[]
    addPost:(postMessage:string)=>void
}

export const MyPosts:React.FC<MyPostType> = (props) => {
    let postElements = props.posts.map( p=>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current) {
        props.addPost(newPostElement.current.value)
        }
    }

    return <div className={s.postBlock}>
        <h3> My post </h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}