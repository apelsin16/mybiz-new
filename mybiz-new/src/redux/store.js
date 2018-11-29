import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redusers';

const _applyMiddleware = () => {
    const middleware = [

    ];
    return applyMiddleware(...middleware);
}

export const configureStore = initialState => {
    const store = compose(
        _applyMiddleware()
    )(createStore)(rootReducer, initialState); 
     return store;
}