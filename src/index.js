import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import App from './pages/App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
    <App />, 
    // <Provider>
    
    // </Provider>,
    
    document.getElementById('root'));
