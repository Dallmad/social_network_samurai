
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/ReduxStore";

type ProfileType = {

    store:StoreType
}
export const Profile: React.FC<ProfileType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}
        />
    </div>
}