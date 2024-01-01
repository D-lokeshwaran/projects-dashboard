export const proxy = "http://localhost:8008"

function handleOptions(options) {
    const update = { ...options }; // get all options
    /*const token = localStorage.token;
    if (token) {
        update.headers = { // if token present add token
           ...update.headers,
           'Authorization': token,
        };
    }*/
    return update;
}

export const fetchApiClient = (url, options) => {
  return fetch((proxy + url), handleOptions(options));
}