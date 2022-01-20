import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

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
type AppType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    posts: PostPropsType[]
}

const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Profile posts={props.posts}/>}/>
                        <Route path='/messages/*'
                               element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;