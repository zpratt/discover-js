import React, {Component} from 'react';
import DebouncedInput from 'react-debounce-input';
import {Link} from 'react-router';
import {stringify as stringifyQueryParams} from 'query-string';

import SearchFilters from './components/search-filters';
import RecentSearches from './components/recent-searches';
import SearchResults from './components/search-results';

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
        const {results, recentSearches} = this.props;

        return (
            <div>
                <main className='content'>
                    <DebouncedInput
                        minLength={4}
                        debounceTimeout={300}
                        onChange={searchLanguageAction.bind(this)}
                    />
                    <SearchResults results={results}/>
                </main>
                <aside>
                    <RecentSearches recentSearches={recentSearches} />
                    <SearchFilters onChange={filterByStars.bind(this)} />
                </aside>
            </div>
        );

    }
}

export default AppContainer;
