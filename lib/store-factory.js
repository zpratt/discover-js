import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import actions from './actions/index';
import State, {getDefaultState} from './state/state';

export function create() {
    const initialState = getDefaultState(),
        middlewareStoreCreator = applyMiddleware(thunk)(createStore);

    return middlewareStoreCreator(reducers, initialState);
}
