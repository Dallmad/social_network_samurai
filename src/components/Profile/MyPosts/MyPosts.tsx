import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {PostPropsType} from "../../../redux/profile-reducer";
import {ProfilePropsType} from './MyPostsContainer';

export const MyPosts: React.FC<ProfilePropsType> = (props) => {
    const postElements = props.posts.map(p =>
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost(props.messageForNewPost)
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e)
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