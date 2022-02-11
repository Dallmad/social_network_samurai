
import React from "react";
import {addPostCallbackAC, changeNewTextCallbackAC} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import { StoreType} from "../../../redux/ReduxStore";

type MyPostType = {
    store:StoreType
}

export const MyPostsContainer: React.FC<MyPostType> = (props) => {
    const state = props.store.getState()
    const addPost = (postText:string) => {
        props.store.dispatch(addPostCallbackAC(postText))
    }
    const newTextChangeHandler = (text:string) => {
        props.store.dispatch(changeNewTextCallbackAC(text))
    }

    return <MyPosts
        posts={state.profilePage.posts}
        changeNewTextCallback={newTextChangeHandler}
        addPost={addPost}
        messageForNewPost={state.profilePage.messageForNewPost}
    />
}