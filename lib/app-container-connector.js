import {connect} from 'react-redux';
import AppContainer from './app-container';

function mapStateToProps(state) {
    const { search } = state;

    return {
        results: search.results
    }
}

export default connect(mapStateToProps)(AppContainer)
