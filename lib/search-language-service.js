import {getWithPagination} from './github-paginated-client-service';

export async function findAll(searchTerms) {
    const issueCommentsResource = `/search/repositories`;

    return getWithPagination(issueCommentsResource, {
        q: `${searchTerms} language:javascript`
    })
        .then(results => {
            let searchResults = [];

            results.forEach(resultPage => {
                searchResults = searchResults.concat(resultPage.items);
            });

            return searchResults;
        });
}
