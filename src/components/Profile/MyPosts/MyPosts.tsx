import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        My post
        <div className={s.posts}>
            <Post message='Hi, how are you?'/>
            <Post message="It's my first post."/>
        </div>
    </div>
}