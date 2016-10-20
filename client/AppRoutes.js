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
var DashboardPage = require('./DashboardPageLayout');
var DashboardPage = require('./DashboardPage');
var PageAngular2 = require('./PageAngular2');

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
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/angular-2" component={PageAngular2} />
                    <Route path="/react" component={DashboardPage} />
                    <Route path="/ember" component={DashboardPage} />
                    <Route path="/angular" component={DashboardPage} />
                  </Route>
      </Router>
            );
    }

})

module.exports = AppRoutes;
