
function parseJSON(response) {
  return response.json();
}

function parseData(data) {
    return data;
  }

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options,callback) {
  console.log(url);
  console.log(options);
  var result=[];
  return fetch(url, options)
    .then(parseJSON)
    .then(parseData)
    .catch(err => ({ err }));
}
