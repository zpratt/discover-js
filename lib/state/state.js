import {t} from 'redux-tcomb';

const State = t.struct({
    search: t.struct({
        results: t.list(t.Any)
    })
}, 'State');

export default State;

export function getDefaultState() {
    return State({
        search: {
            results: []
        }
    });
}
