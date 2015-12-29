import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';

import reducers from './reducers';
import actions from './actions/index';
import State, {getDefaultState} from './state/state';

export function create() {
    const initialState = getDefaultState(),
        middlewareStoreCreator = applyMiddleware(thunk)(createStore),
        finalReducers = combineReducers({
            ...reducers,
            routing: routeReducer
        });

    return middlewareStoreCreator(finalReducers, initialState);
}
