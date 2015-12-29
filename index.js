import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {create as createStore} from './lib/store-factory';
import ResultsProvider from './lib/results-provider';

const store = createStore();

ReactDOM.render(<ResultsProvider store={store} />, document.querySelector('.app'));
