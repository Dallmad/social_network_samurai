import React from 'react';
import {addPostCallbackAC, changeNewTextCallbackAC, PostPropsType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../redux/redux-store';

type MapStatePropsType = {
    posts: PostPropsType[]
    messageForNewPost: string
}
type MapDispatchPropsType = {
    changeNewTextCallback: (text: string) => void
    addPost: (postText: string) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (postText) => {
            dispatch(addPostCallbackAC(postText))
        },
        changeNewTextCallback: (text) => {
            dispatch(changeNewTextCallbackAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
