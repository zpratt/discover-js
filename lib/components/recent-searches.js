import React from 'react';
import {Link} from 'react-router';

function RecentSearches(props) {
    return (
        <section>
            <header><h2>{'Recent Searches'}</h2></header>
            <ul>
                {props.recentSearches.map(search => {
                    return (
                        <li><Link to='/' query={search}>{search.search}</Link></li>
                    );
                })}
            </ul>
        </section>
    );
}

RecentSearches.displayName = 'RecentSearches';

export default RecentSearches;
