import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import App from './App';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

