var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var Link = router.Link;
var browserHistory = router.browserHistory;
var hashHistory = router.hashHistory;

var connect = require('react-redux').connect;
var DashboardPage = require('./DashboardPage');

var AppRoutes = React.createClass({

    shouldComponentUpdate: function(){
        return false;
    },

    componentDidMount: function() {
    },

    render: function () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={DashboardPage}>
                    <IndexRoute component={DashboardPage} />
                    <Route path="/dashboard" component={DashboardPage}>
                      </Route>
                    <Route path="/angular-2" component={DashboardPage}>
                      </Route>
                    <Route path="/react" component={DashboardPage}>
                      </Route>
                    <Route path="/ember" component={DashboardPage}>
                      </Route>
                    <Route path="/angular" component={DashboardPage}>
                      </Route>
                </Route>
      </Router>
            );
    }

})

module.exports = AppRoutes;
