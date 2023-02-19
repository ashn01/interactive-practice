import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as ReactDom from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Practice1 from './components/practice1';
import Practice2 from './components/practice2';
import Practice3 from './components/practice3';
import Practice4 from './components/practice4';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "practice1",
        element: <Practice1/>
    },
    {
        path: "practice2",
        element: <Practice2/>
    },
    {
        path: "practice3",
        element: <Practice3/>
    },
    {
        path: "practice4",
        element: <Practice4/>
    }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
