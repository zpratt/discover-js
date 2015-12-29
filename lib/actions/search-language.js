import ACTION_TYPES from '../action-types';
import {findAll} from '../search-language-service';

export function showAll(searchText) {
    return dispatch => {
        searchText ? findAll(searchText)
            .then(
                result => {
                    return dispatch({
                        type: ACTION_TYPES.SHOW_RESULTS,
                        results: result
                    });
                },
                error => dispatch({
                    message: 'an error happened'
                })
            ) : Promise.resolve([]);
    };
}
