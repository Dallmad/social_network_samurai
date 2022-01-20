import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {PostPropsType} from "../../redux/state";

export type ProfileType = {
    posts:PostPropsType[]
}
export const Profile:React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
}