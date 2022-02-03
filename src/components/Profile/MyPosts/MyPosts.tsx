import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {ActionsTypes, PostPropsType} from "../../../redux/state";


type MyPostType = {
    posts: { posts: PostPropsType[], messageForNewPost: string }
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts: React.FC<MyPostType> = (props) => {
    let postElements = props.posts.posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch({type: 'ADD-POST-CALLBACK', postText: props.posts.messageForNewPost})
    }
    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'CHANGE-NEW-TEXT-CALLBACK', newText: e.currentTarget.value})
    }

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