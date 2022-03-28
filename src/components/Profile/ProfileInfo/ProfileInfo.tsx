import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/preloader/Preloader';

type ProfileInfoType = {
    profile: ProfileType | null
    setUserProfile: (profile: null) => void
}
type PhotoType = {
    small: string
    large: string
}
type ProfileType = {
    aboutMe: string
    contacts: {}
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotoType
    userId: number
}
export const ProfileInfo = (props:ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img className={s.img} src='https://www.meme-arsenal.com/memes/0a5bb7478b7e122896daece13d9c36e7.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            ava+descrition
        </div>
    </div>
}