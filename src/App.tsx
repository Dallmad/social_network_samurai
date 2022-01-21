import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {stateType} from "./redux/state";


const App: React.FC<stateType> = (props) => {
    return (
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
    );
}
export default App;