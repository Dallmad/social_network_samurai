import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from './MyPosts/MyPostsContainer';


type ProfilePropsType = {
    profile: null
}

export const Profile:React.FC<ProfilePropsType> = (props) => {

    return <div>
        <ProfileInfo {...props}/>
        <MyPostsContainer/>
    </div>
}