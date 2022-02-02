import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {PostPropsType} from "../../redux/state";

type ProfileType = {
    posts: { posts: PostPropsType[], messageForNewPost: string }
    addPostCallback: (postMessage: string) => void
    changeNewTextCallback: (newText: string) => void
}
export const Profile: React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.posts}
            addPostCallback={props.addPostCallback}
            changeNewTextCallback={props.changeNewTextCallback}
        />
    </div>
}