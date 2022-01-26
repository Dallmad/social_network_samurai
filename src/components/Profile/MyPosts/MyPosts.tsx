import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {PostPropsType} from "../../../redux/state";


type MyPostType = {
    posts: { posts: PostPropsType[], messageForNewPost: string }
    addPostCallback: (post: string) => void
    changeNewTextCallback: (newText: string)=>void
}

export const MyPosts: React.FC<MyPostType> = (props) => {
    let postElements = props.posts.posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPostCallback(props.posts.messageForNewPost)
    }
    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)}

    return <div className={s.postBlock}>
        <h3> My post </h3>
        <div>
                <textarea
                    value={props.posts.messageForNewPost}
                    onChange={newTextChangeHandler}
                ></textarea>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}