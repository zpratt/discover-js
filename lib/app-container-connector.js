import {connect} from 'react-redux';
import {pushPath} from 'redux-simple-router';

import AppContainer from './app-container';
import {searchBy} from './actions/search-language';

function mapStateToProps(state) {
    const { search } = state;

    return {
        results: search.results,
        recentSearches: search.recentSearches
    }
}

export default connect(mapStateToProps, {pushPath, searchBy})(AppContainer)
