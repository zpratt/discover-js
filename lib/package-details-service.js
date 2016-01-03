import {getWithPagination} from './github-paginated-client-service';
import {fetch} from './fetch-service';
import parseJson from 'parse-json';

async function getNpmDownloads(packageName) {
    try {
        const downloadsRequest = await fetch(`https://api.npmjs.org/downloads/point/last-week/${packageName}`);

        return downloadsRequest.json();
    } catch (error) {
        Promise.reject(error);
    }
}

async function getPackageJson(owner, repo) {
    const fileResource = `/repos/${owner}/${repo}/contents/package.json`;

    try {
        const response = await getWithPagination(fileResource, {
                ref: `master`
            }),
            packageJsonString = new Buffer(response[0].content, 'base64').toString('utf8');

        return parseJson(packageJsonString);
    } catch (error) {
        if (error.status === 404) {
            return null;
        }
        return Promise.reject(error);
    }
}

export async function get(owner, repo) {
    try {
        const parsedPackageJson = await getPackageJson(owner, repo),
            downloads = parsedPackageJson ? await getNpmDownloads(parsedPackageJson.name) : 0;

        return {
            numDownloads: downloads.downloads || 0
        };
    } catch (error) {
        return Promise.reject(error);
    }
}
