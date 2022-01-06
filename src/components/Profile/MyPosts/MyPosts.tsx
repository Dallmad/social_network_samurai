import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        My post
        <div className={s.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
}