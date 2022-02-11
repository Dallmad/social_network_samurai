import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {ProfileActionsTypes, ProfilePageType} from "../../redux/ProfileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/ReduxStore";

type ProfileType = {
    /*posts: ProfilePageType
    dispatch:(action: ProfileActionsTypes) => void*/
    store:StoreType
}
export const Profile: React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            //posts={props.posts}
            //dispatch={props.dispatch}
            store={props.store}
        />
    </div>
}