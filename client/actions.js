
var FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
var fetchDataSuccess = function(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        data: data
    };
};

var FETCH_DATA_ERROR= 'FETCH_DATA_ERROR';
var fetchDataError = function(error) {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    };
};

var fetchData = function() {
      return function(dispatch) {
       var headers = new Headers();
       var url = 'http://localhost:3000/frameworks';
       return fetch(url, headers).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return dispatch(
                fetchDataSuccess(data)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchDataError(error)
            );
        });
    }
};

exports.fetchData = fetchData;


exports.FETCH_DATA_SUCCESS = FETCH_DATA_SUCCESS;
exports.fetchDataSuccess = fetchDataSuccess;
exports.FETCH_DATA_ERROR = FETCH_DATA_ERROR;
exports.fetchDataError = fetchDataError;
