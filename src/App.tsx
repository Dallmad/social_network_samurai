import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {DialogItemPropsType, MessagePropsType, PostPropsType} from "./redux/state";

type AppType = {
    profilePage:{posts:PostPropsType[],messageForNewPost:string}
    dialogsPage:{dialogs:DialogItemPropsType[],messages:MessagePropsType[]}
    addPostCallback:(post: string)=>void
    changeNewText:(newText: string)=>void
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/'
                           element={<Profile
                               posts={props.profilePage}
                               addPostCallback={props.addPostCallback}
                               changeNewText={props.changeNewText}
                           />}
                    />
                    <Route path='/messages/*' element={<Dialogs
                               dialogs={props.dialogsPage.dialogs}
                               messages={props.dialogsPage.messages}
                               />}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;