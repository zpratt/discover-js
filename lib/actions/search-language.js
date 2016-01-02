import ACTION_TYPES from '../action-types';
import {findAll} from '../search-language-service';

export function searchBy(searchParams) {
    return dispatch => {
        findAll(searchParams)
            .then(
                result => {
                    return dispatch({
                        type: ACTION_TYPES.SHOW_RESULTS,
                        results: result
                    });
                },
                error => {
                    return dispatch({
                        type: 'ERROR',
                        message: 'an error happened'
                    });
                }
            )
    }
}
