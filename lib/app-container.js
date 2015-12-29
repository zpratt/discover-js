import React from 'react';
import DebouncedInput from 'react-debounce-input';

function searchLanguageAction(showAll, pushPath) {
    return event => {
        const searchText = event.target.value;

        pushPath(`?search=${searchText}`);

        showAll(searchText);
    };
}

export default props => {
    return (
        <main className='content'>
            <DebouncedInput
                minLength={4}
                debounceTimeout={300}
                onChange={searchLanguageAction(props.showAll, props.pushPath)}
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
