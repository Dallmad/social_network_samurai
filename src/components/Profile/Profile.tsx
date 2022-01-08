import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./Profile/ProfileInfo";

export const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}