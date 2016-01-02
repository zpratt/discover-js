import State, {getDefaultState} from '../state/state';
import ACTION_TYPES from '../action-types';

import {parse as parseUrl} from 'url';
import {parse as parseQueryParams} from 'query-string';

import {UPDATE_PATH} from 'redux-simple-router'

export function search(state = getDefaultState(), action) {
    const typeMap = {
            [ACTION_TYPES.SHOW_RESULTS]: (state, action) => {
                return {
                    ...state,
                    results: action.results
                };
            },
            [UPDATE_PATH]: (state, action) => {
                const nextPathState = action.payload.path,
                    parsedPath = parseUrl(nextPathState),
                    parsedQueryParams = parseQueryParams(parsedPath.query);

                return {
                    ...state,
                    currentSearch: parsedQueryParams.search,
                    recentSearches: state.recentSearches.concat([parsedQueryParams])
                };
            }
        },
        reducer = typeMap[action.type];

    return reducer ? reducer(state, action) : state;
}
