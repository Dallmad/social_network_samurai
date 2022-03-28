import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {setUserProfile} from '../../redux/profile-reducer';


type ProfilePropsType = {
    profile: null
    setUserProfile: (profile: null) => void
}

export const Profile:React.FC<ProfilePropsType> = (props) => {
    console.log(props.profile)
    return <div>
        <ProfileInfo profile={props.profile} setUserProfile={setUserProfile}/>
        <MyPostsContainer/>
    </div>
}