import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {PostPropsType} from "../../redux/state";

 type ProfileType = {
    posts:PostPropsType[]
    addPost:(postMessage:string)=>void
}
export const Profile:React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 addPost={props.addPost}
        />
    </div>
}