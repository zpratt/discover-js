import ACTION_TYPES from '../action-types';
import {findAll} from '../search-language-service';
import {get} from '../package-details-service';

async function getSearchResults(searchParams) {
    try {
        return await findAll(searchParams);
    } catch (error) {
        return Promise.reject(error);
    }
}

async function getPackageDownloads(org, repoName) {
    try {
        return await get(org, repoName);
    } catch (error) {
        return Promise.reject(error);
    }
}

function getPackageJsonForAllResults(searchResults) {
    const repoIdentities = searchResults.map(result => ({
            org: result.owner.login,
            name: result.name
        })),
        packageDownloadRequests = repoIdentities.map(repo => getPackageDownloads(repo.org, repo.name));

    return Promise.all(packageDownloadRequests).then(results => {
        return results.map((result, index) => {
            return {
                ...searchResults[index],
                ...result
            };
        });
    });
}

export function searchBy(searchParams) {
    return dispatch => {
        getSearchResults(searchParams)
            .then(getPackageJsonForAllResults)
            .then(
                packageJsons => dispatch({
                    type: ACTION_TYPES.SHOW_RESULTS,
                    results: packageJsons
                }),
                error => dispatch({
                    type: 'ERROR',
                    message: 'an error happened'
                }));
    }
}
