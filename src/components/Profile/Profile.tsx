import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {ActionsTypes, PostPropsType} from "../../redux/state";

type ProfileType = {
    posts: { posts: PostPropsType[], messageForNewPost: string }
    dispatch:(action: ActionsTypes) => void
}
export const Profile: React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.posts}
            dispatch={props.dispatch}
        />
    </div>
}