var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var actions = require('./actions');
var store = require('./store');
var AppRoutes = require('./AppRoutes');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
        <AppRoutes/>
        </Provider>,
    document.getElementById('app'));
});
