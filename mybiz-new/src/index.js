import React from 'react';
import ReactDOM from 'react-dom';
import composeEnhancers from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

const store = composeEnhancers();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

