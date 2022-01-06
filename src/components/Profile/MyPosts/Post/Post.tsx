import s from './Post.module.css'

export const Post = () => {
    return <div className={s.item}>
        <img
            src='data:image/jpeg;base64,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'/>
        Post 1
        <div>
            <span>like</span>
        </div>
    </div>
}