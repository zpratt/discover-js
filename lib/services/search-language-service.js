import {getWithPagination} from './github-paginated-client-service';

export async function findAll(searchTerms) {
    const issueCommentsResource = `/search/repositories`,
        starsPredicate = searchTerms.stars ? ` stars:${searchTerms.stars}` : '';

    return getWithPagination(issueCommentsResource, {
        q: `${searchTerms.search} language:javascript${starsPredicate}`,
        per_page: 5
    })
        .then(results => {
            let searchResults = [];

            results.forEach(resultPage => {
                searchResults = searchResults.concat(resultPage.items);
            });

            return searchResults;
        });
}
