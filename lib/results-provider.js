import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './app-container-connector';

export default props => {
    return (
        <Provider store={props.store}>
            <AppContainer />
        </Provider>
    );
}
