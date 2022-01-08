import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div className={s.postBlock}>
        <h3> My post </h3>

            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        <div className={s.posts}>
            <Post message='Hi, how are you?'/>
            <Post message="It's my first post."/>
        </div>
    </div>
}