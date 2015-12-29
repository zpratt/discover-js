import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

import reducers from './reducers';
import actions from './actions/index';
import State, {getDefaultState} from './state/state';

export function create() {
    const initialState = getDefaultState(),
        middlewareStoreCreator = applyMiddleware(thunk)(createStore),
        finalReducers = combineReducers(reducers);

    return middlewareStoreCreator(finalReducers, initialState);
}
