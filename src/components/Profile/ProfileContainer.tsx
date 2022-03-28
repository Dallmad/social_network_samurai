import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
                this.props.setUserProfile(response.data)
            }
        )
    }

    render() {
        return <div>
            <Profile
                {...this.props}
                profile={this.props.profile}
                setUserProfile={setUserProfile}
            />
        </div>
    }
}

type MapStatePropsType = {
    profile: null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: null) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)