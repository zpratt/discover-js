import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {syncReduxAndRouter} from 'redux-simple-router';
import {createHistory} from 'history'

import {create as createStore} from './lib/store-factory';
import ResultsProvider from './lib/results-provider';

const store = createStore(),
    history = createHistory();

syncReduxAndRouter(history, store);

ReactDOM.render((
    <ResultsProvider
        history={history}
        store={store}
    />
), document.querySelector('.app'));
