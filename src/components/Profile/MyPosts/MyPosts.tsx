import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {PostPropsType} from "../../../redux/ProfileReducer";

type MyPostType = {
    changeNewTextCallback: (e: string) => void
    addPost: (postText: string) => void
    posts: PostPropsType[]
    messageForNewPost: string
}

export const MyPosts: React.FC<MyPostType> = (props) => {
    const postElements = props.posts.map(p =>
        <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost(props.messageForNewPost)
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }

    return <div className={s.postBlock}>
        <h3> My post </h3>
        <div>
                <textarea
                    value={props.messageForNewPost}
                    onChange={newTextChangeHandler}
                />
        </div>
        <div>
            <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}