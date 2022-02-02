
export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    message: string
    id: number
}
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type stateType = {
    profilePage: { posts: PostPropsType[], messageForNewPost: string }
    dialogsPage: { dialogs: DialogItemPropsType[], messages: MessagePropsType[] }
}
export type StoreType = {
    _state: stateType
    addPostCallback:(post: string)=>void
    changeNewTextCallback:(newText: string)=>void
    _onChange:()=>void
    subscribe:(callback:() => void)=>void
    getState:() => stateType
}

export const store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It"s my first post.', likesCount: 23},
            ],
            messageForNewPost: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'}
            ]
        }
    },
    addPostCallback (post: string) {
        const newPost: PostPropsType = {
            id: 5,
            message: this._state.profilePage.messageForNewPost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.messageForNewPost=''
        this._onChange()
    },
    changeNewTextCallback (newText: string) {   //name function on js samurai -
        this._state.profilePage.messageForNewPost = newText   //updateNewPostText
        this._onChange()
    },
    _onChange () {console.log('State changed')}, //_callSubscribers on js samurai
    subscribe (callback:()=>void) {
        this._onChange=callback
    },
    getState () {
        return this._state
    }
}