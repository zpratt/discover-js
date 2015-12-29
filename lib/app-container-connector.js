import {connect} from 'react-redux';
import {pushPath} from 'redux-simple-router';

import AppContainer from './app-container';
import {showAll} from './actions/search-language';

function mapStateToProps(state) {
    const { search } = state;

    return {
        results: search.results
    }
}

export default connect(mapStateToProps, {pushPath, showAll})(AppContainer)
