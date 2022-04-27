import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import { Navigate } from "react-router-dom";


type ProfilePropsType = {
    profile: null
    status: string
    updateStatus: (status: string) => void
}

export const Profile:React.FC<ProfilePropsType> = (props) => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (!isAuth) {
        return <Navigate to='/login'/>
    }
    return <div>
        <ProfileInfo {...props}/>
        <MyPostsContainer/>
    </div>
}