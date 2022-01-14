import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let post = [
        {id:1,message:'Hi, how are you?',likesCount:11},
        {id:2,message:'It"s my first post.',likesCount:23},
    ]
    let postElements = post.map( p =>
        <Post message={p.message} likesCount={p.likesCount}/>
    )
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