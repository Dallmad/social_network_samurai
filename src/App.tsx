import React from 'react';
import './App.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import {StoreType} from './redux/ReduxStore'
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/'
                           element={<Profile
                              /* posts={state.profilePage}
                               dispatch={props.store.dispatch.bind(props.store)}*/
                               store={props.store}
                           />}
                    />
                    <Route path='/messages/*' element={<DialogsContainer
                        store={props.store}
                        /*dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        dispatch={props.store.dispatch.bind(props.store)}
                        newMessageBody={state.dialogsPage.newMessageBody}*/
                    />}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;