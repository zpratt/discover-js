import React, {Component} from 'react';
import DebouncedInput from 'react-debounce-input';
import {Link} from 'react-router';
import {stringify as stringifyQueryParams} from 'query-string';

import SearchFilters from './components/search-filters';
import RecentSearches from './components/recent-searches';

function updatePath(param, value) {
    const {pushPath, location} = this.props,
        nextQueryParams = {
            ...location.query,
            [param]: value
        },
        queryParamString = stringifyQueryParams(nextQueryParams);

    pushPath(`${this.props.location.pathname}?${queryParamString}`);
}

function searchLanguageAction(event) {
    updatePath.call(this, 'search', event.target.value);
}

function filterByStars(event) {
    updatePath.call(this, 'stars', event.target.value);
}

class AppContainer extends Component {
    componentWillReceiveProps(nextProps) {
        var searchOptions = nextProps.location.query;

        if (this.props.location.query !== searchOptions) {
            this.props.searchBy(searchOptions);
        }
    }

    render() {
        return (
            <div>
                <main className='content'>
                    <DebouncedInput
                        minLength={4}
                        debounceTimeout={300}
                        onChange={searchLanguageAction.bind(this)}
                    />
                    <section>
                        <h2>{'Results'}</h2>
                        <ul>
                            {this.props.results.map(result => {
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
                </main>
                <aside>
                    <RecentSearches recentSearches={this.props.recentSearches} />
                    <SearchFilters onChange={filterByStars.bind(this)} />
                </aside>
            </div>
        );

    }
}

export default AppContainer;
