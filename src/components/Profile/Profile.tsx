import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://www.nibib.nih.gov/sites/default/files/2020-12/Abstract-Banner-730x250.jpg'/>
        </div>
        <div>
            ava+descrition
        </div>
        <MyPosts/>
    </div>
}