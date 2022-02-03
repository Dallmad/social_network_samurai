import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return <div>
        <div>
            <img className={s.img} src='https://www.meme-arsenal.com/memes/0a5bb7478b7e122896daece13d9c36e7.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava+descrition
        </div>
    </div>
}