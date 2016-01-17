import React from 'react';

function SearchResults(props) {
    return (
        <section>
            <h2>{'Results'}</h2>
            <ul>
                {props.results.map(result => {
                    return (
                        <li>
                            <h3><a href={result.homepage}>{result.full_name}</a></h3>
                            <dl>
                                <dt>{'Stars'}</dt>
                                <dd>{result.stargazers_count}</dd>
                                <dt>{'Number of npm downloads'}</dt>
                                <dd>{result.numDownloads}</dd>
                            </dl>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

SearchResults.displayName = 'SearchResults';

export default SearchResults;
