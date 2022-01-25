import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, stateType} from './redux/state'

export let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    profilePage={state.profilePage}
                    dialogsPage={state.dialogsPage}
                    addPost={addPost}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

