import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from './components/Users/Users';


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/'
                           element={<Profile/>}
                    />
                    <Route path='/messages/*' element={<DialogsContainer/>}/>
                    <Route path='/users/*' element={<Users/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;