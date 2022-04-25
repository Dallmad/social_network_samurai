import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/preloader/Preloader'
import userPhoto from '../../../assets/images/img.png'
import {ProfileStatus} from './ProfileStatus';

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
       {/* <div>
            <img className={s.img} src="https://www.meme-arsenal.com/memes/0a5bb7478b7e122896daece13d9c36e7.jpg"/>
        </div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large
                ? props.profile.photos.large
                : userPhoto
            }/>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <ProfileStatus {...props}/>
        </div>
    </div>
}