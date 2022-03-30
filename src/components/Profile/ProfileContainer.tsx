import React, {FC, useEffect} from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';
import {useMatch, useParams} from 'react-router-dom';


export const ProfileContainer: FC<ProfilePropsType> = (props) => {
    const params = useParams<'*'>();

    let userId = params['*']
    if (!userId) {userId='25'}
    useEffect(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
                props.setUserProfile(response.data)
            })
    }, [])

    return (
        <Profile {...props}/>
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)


type MapStatePropsType = {
    profile: null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: null) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

// type ContactsType = {
//     github: string
//     vk: string
//     facebook: string
//     instagram: string
//     twitter: string
//     website: string
//     youtube: string
//     mainLink: string
// }
// type PhotosType = {
//     small: string
//     large: string
// }
// type ProfileType = {
//     userId: number
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     contacts: ContactsType
//     photos: PhotosType
// }

//через классовую с оберткой
/*const withRouter =
    WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};*/


/*class ProfileContainer extends React.Component<ProfilePropsType> {

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
            />
        </div>
    }
}*/
