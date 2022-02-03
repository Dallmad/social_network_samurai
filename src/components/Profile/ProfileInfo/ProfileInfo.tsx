import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return <div>
        <div>
            <img className={s.img} src='https://www.nibib.nih.gov/sites/default/files/2020-12/Abstract-Banner-730x250.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava+descrition
        </div>
    </div>
}