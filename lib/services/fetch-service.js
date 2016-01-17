import 'isomorphic-fetch';

export async function fetch(input, options) {
    var fetchOptions = {...options},
        response;

    fetchOptions.credentials = fetchOptions.credentials || 'same-origin';
    fetchOptions.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    response = await global.fetch(input, fetchOptions);

    if (!response.ok) {
        return Promise.reject(response);
    }

    return response;
}
