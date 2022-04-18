import React, {FC, useEffect} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';
import {usersAPI} from '../../api/api';


export const ProfileContainer: FC<ProfilePropsType> = (props) => {
    const params = useParams<'*'>();

    let userId:string | undefined = params['*']
    if (!userId) {userId='25'}
    useEffect(() => {
           usersAPI.getProfile(userId)
               .then(response => {
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
    setUserProfile,
    // getProfile
})(ProfileContainer)


type MapStatePropsType = {
    profile: null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: null) => void
    // getProfile:(userId: string | undefined)=> void
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
