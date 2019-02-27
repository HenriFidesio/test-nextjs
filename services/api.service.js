const apiEndPoint = 'https://fhirtest.uhn.ca/baseDstu3';

const getHttpHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8',
    };
    return new Headers(headers);
};

const handleResponse = response => {
    if (response.status === 204) {
        return '';
    }
    return response.json().then(json => {
        if (response.ok) {
            return json;
        } else {
            return Promise.reject(json);
        }
    });
}


export const post = ({ url, data }) => {
    return fetch(`${apiEndPoint}/${url}`, {
        method: 'POST',
        body: data,
        headers: getHttpHeaders(),
    }).then(handleResponse);
};

