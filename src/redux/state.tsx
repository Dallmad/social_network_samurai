import {rerenderEntireTree} from "../render";

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
    profilePage: {posts:PostPropsType[]}
    dialogsPage: {dialogs:DialogItemPropsType[],messages:MessagePropsType[]}
}

export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It"s my first post.', likesCount: 23},
        ]
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
}
export let addPost = (postMessage:string)=>{
    let newPost:PostPropsType = {
        id:5,
        message:postMessage,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}