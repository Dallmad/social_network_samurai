import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

export type DialogItemPropsType = {
    id:number
    name:string
}
export type MessagePropsType = {
    message:string
    id:number
}
export type PostPropsType = {
    id:number
    message: string
    likesCount: number
}

const App = () => {
    let dialogs = [
        {id:1,name:'Dima'},
        {id:2,name:'Andrey'},
        {id:3,name:'Sveta'},
        {id:4,name:'Sasha'},
        {id:5,name:'Viktor'},
        {id:6,name:'Valera'}
    ]
    let messages = [
        {id:1,message:'Hi'},
        {id:2,message:'How is your it-kamasutra?'},
        {id:3,message:'Yo'}
    ]
    let posts = [
        {id:1,message:'Hi, how are you?',likesCount:11},
        {id:2,message:'It"s my first post.',likesCount:23},
    ]

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Profile posts={posts}/>}/>
                        <Route path='/messages/*' element={<Dialogs dialogs={dialogs}  messages={messages}/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;