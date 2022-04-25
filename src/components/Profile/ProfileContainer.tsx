import React, {ComponentType, FC, useEffect} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


export const ProfileContainer: FC<ProfilePropsType> = (props) => {
    const params = useParams<'*'>();

    let userId: string | undefined = params['*']
    if (!userId) {
        userId = '22601'
    }
    useEffect(() => {
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])

    return (
        <Profile {...props}/>
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer)

type MapStatePropsType = {
    profile: null
    status: string
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void,
    getStatus: (userId: string | undefined) => void,
    updateStatus: (status: string) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
