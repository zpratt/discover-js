import {fetch} from './fetch-service';

import {stringify as buildQueryString} from 'query-string';
import parseLinkHeader from 'parse-link-header';

async function requestPage(uri, queryParams, pageNum) {
    const queryString = '?' + buildQueryString({...queryParams, page: pageNum}),
        requestUri = uri + queryString;

    try {
        return await fetch(requestUri);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function getWithPagination(resource, queryParams) {
    const host = 'https://api.github.com',
        uri = `${host}${resource}`;

    let allPagesReceived = false,
        currentPage = 1,
        resultsForAllPages = [],
        requests = [];

    while (!allPagesReceived) {
        if (currentPage === 2) {
            break;
        }

        const result = await requestPage(uri, queryParams, currentPage),
            linkHeader = parseLinkHeader(result.headers.get('link')) || {};

        requests.push(result.json());

        allPagesReceived = !linkHeader.last;
        currentPage += 1;
    }

    return Promise.all(requests).then(results => {
        results.forEach(result => {
            resultsForAllPages = resultsForAllPages.concat(result);
        });

        return resultsForAllPages;
    });
}
