import React from 'react';

function SearchFilters(props) {
    return (
        <section>
            <header><h2>{'Filters'}</h2></header>
            <ul>
                <li>
                    <label htmlFor='stars'>{'Number Of Stars'}</label>
                    <select id='stars' name='stars' onChange={props.onChange}>
                        <option value='>=100'>{'Greater Than 100'}</option>
                        <option value='>=500'>{'Greater Than 500'}</option>
                        <option value='>=1000'>{'Greater Than 1000'}</option>
                    </select>
                </li>
            </ul>
        </section>
    );
}

SearchFilters.displayName = 'SearchFilters';

export default SearchFilters;
