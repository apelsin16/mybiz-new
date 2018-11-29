import { createStore } from 'redux';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(...middleware)
));



export default composeEnhancers;