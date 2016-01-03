import React, {Component} from 'react';
import DebouncedInput from 'react-debounce-input';
import {Link} from 'react-router';
import {stringify as stringifyQueryParams} from 'query-string';

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
                    <section>
                        <header><h2>{'Recent Searches'}</h2></header>
                        <ul>
                            {this.props.recentSearches.map(search => {
                                return (
                                    <li><Link to='/' query={search}>{search.search}</Link></li>
                                );
                            })}
                        </ul>
                    </section>
                    <section>
                        <header><h2>{'Filters'}</h2></header>
                        <ul>
                            <li>
                                <label htmlFor='stars'>{'Number Of Stars'}</label>
                                <select id='stars' name='stars' onChange={filterByStars.bind(this)}>
                                    <option value='>=100'>{'Greater Than 100'}</option>
                                    <option value='>=500'>{'Greater Than 500'}</option>
                                    <option value='>=1000'>{'Greater Than 1000'}</option>
                                </select>
                            </li>
                        </ul>
                    </section>
                </aside>
            </div>
        );

    }
}

export default AppContainer;
