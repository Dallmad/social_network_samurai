import React, {ComponentType, FC, useEffect} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getUserProfile} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


export const ProfileContainer: FC<ProfilePropsType> = (props) => {
    const params = useParams<'*'>();

    let userId: string | undefined = params['*']
    if (!userId) {
        userId = '25'
    }
    useEffect(() => {
        props.getUserProfile(userId)
    }, [])

    return (
        <Profile {...props}/>
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect
)(ProfileContainer)

type MapStatePropsType = {
    profile: null
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
