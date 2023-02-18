import React from 'react';
import { Link } from 'react-router-dom';

import './scss/general.scss';

function App() {
    return (
        <div className="App">
            <h1>Hello world. This is interactice web development practice</h1>
            <ul>
                <li>
                    <Link to="practice1">Practice 1</Link></li>
            </ul>
        </div>
    );
}

export default App;
