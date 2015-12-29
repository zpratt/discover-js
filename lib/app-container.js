import React from 'react';
import DebouncedInput from 'react-debounce-input';
import {showAll} from './actions/search-language';

function searchLanguageAction(dispatch) {
    return event => {
        const searchText = event.target.value;

        dispatch(showAll(searchText));
    };
}

export default props => {
    return (
        <main className='content'>
            <DebouncedInput
                minLength={4}
                debounceTimeout={300}
                onChange={searchLanguageAction(props.dispatch)}
            />
            <ul>
                {props.results.map(result => {
                    return (
                        <li>
                            <dl>
                                <dt><a href={result.homepage}>{result.full_name}</a></dt>
                                <dd>{result.stargazers_count}</dd>
                            </dl>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};
