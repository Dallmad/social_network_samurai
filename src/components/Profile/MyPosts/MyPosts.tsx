import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React, {createRef, useRef} from "react";
import {PostPropsType} from "../../../redux/state";

type MyPostType={
    posts:PostPropsType[]
}

export const MyPosts:React.FC<MyPostType> = (props) => {
    let postElements = props.posts.map( p=>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElement.current?.value
      alert(text)
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