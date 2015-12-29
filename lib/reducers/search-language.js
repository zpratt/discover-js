import State, {getDefaultState} from '../state/state';
import ACTION_TYPES from '../action-types';

export function search(state = getDefaultState(), action) {
    const typeMap = {
            [ACTION_TYPES.SHOW_RESULTS]: (state, action) => {
                return {
                    results: action.results
                };
            }
        },
        reducer = typeMap[action.type];

    return reducer ? reducer(state, action) : state;
}
