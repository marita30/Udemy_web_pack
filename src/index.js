import React from 'react';
import ReactDom from 'react-dom';
import  { BrowserRouter } from 'react-router-dom';

/* css */
import './index.css';
import App from './App';

const app = (
    <BrowserRouter> 
        <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));