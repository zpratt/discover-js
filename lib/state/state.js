import {t} from 'redux-tcomb';

const State = t.struct({
    search: t.struct({
        recentSearches: t.list(t.Any),
        results: t.list(t.Any)
    })
}, 'State');

export default State;

export function getDefaultState() {
    return State({
        search: {
            recentSearches: [],
            results: []
        }
    });
}
