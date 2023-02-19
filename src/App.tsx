import React from 'react';
import { Link } from 'react-router-dom';

import './scss/general.scss';

function App() {
    return (
        <div className="App">
            <h1>Hello world. This is interactice web development practice</h1>
            <ul>
                {
                    [...Array(4)].map((value, key)=>{
                        value = key + 1;
                        return (
                            <li key={`key-${key}`}>
                                <Link to={`practice${value}`}>Practice {value}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default App;
