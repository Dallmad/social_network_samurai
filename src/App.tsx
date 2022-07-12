import React from 'react';
import './App.css'
import {Navbar} from "./components/Navbar/Navbar";
import {Routes, Route, Navigate} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginPage} from './components/Login/Login';




const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/*'} element={<ProfileContainer/>}/>
                    <Route path='/profile/*'
                           element={<ProfileContainer/>}/>
                    <Route path='/messages/*' element={<DialogsContainer/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                    <Route path='/login/*' element={<LoginPage/>}/>
                    <Route path="/404" element={
                        <h1 style={{textAlign: 'center'}}>404 page not found</h1>}/>
                    <Route path="*" element={<Navigate to={'404'}/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;