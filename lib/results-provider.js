import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';

import AppContainer from './app-container-connector';

export default props => {
    return (
        <Provider store={props.store}>
            <Router history={props.history}>
                <Route path="/" component={AppContainer}>
                </Route>
            </Router>
        </Provider>
    );
}
