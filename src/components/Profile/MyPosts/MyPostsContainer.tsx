import React from 'react';
import {addPostCallback, changeNewTextCallback, PostPropsType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

export type MapStatePropsType = {
    posts: PostPropsType[]
    messageForNewPost: string
}
export type MapDispatchPropsType = {
    addPost: (postText: string) => void
    changeNewTextCallback: (text: string) => void
}
export type PostContainerPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost,
    }
}
export const MyPostsContainer = connect(mapStateToProps, {
    addPost:addPostCallback,
    changeNewTextCallback
})(MyPosts)
