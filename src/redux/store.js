import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

/* Dito na iiimport yung galing kay reducers */
import users from './reducers/users';


const middlewares = compose(applyMiddleware(thunk, logger));


const reducers = combineReducers({
    users: users
})

export default createStore(reducers, middlewares)