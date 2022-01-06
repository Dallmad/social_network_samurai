import React from 'react';
import './App.css'

function App() {
    return (
        <div className='app-wrapper'>
            <header className= 'header'>
                <img src='https://game-tournaments.com/media/b/csbet_right_xray_2.png'/>
            </header>
            <nav className='nav'>
                <div><
                    a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
            </nav>
            <div className='content'>Main content</div>
        </div>
    );
}

export default App;
