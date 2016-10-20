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
var DashboardPageLayout = require('./DashboardPageLayout');
var DashboardPage = require('./DashboardPage');
var PageAngular2 = require('./PageAngular2');
var PageAngular = require('./PageAngular');
var PageEmber = require('./PageEmber');
var PageReact = require('./PageReact');

var AppRoutes = React.createClass({

    shouldComponentUpdate: function(){
        return false;
    },

    componentDidMount: function() {
    },

    render: function () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={DashboardPageLayout}>
                    <IndexRoute component={DashboardPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/angular-2" component={PageAngular2} />
                    <Route path="/react" component={PageReact} />
                    <Route path="/ember" component={PageEmber} />
                    <Route path="/angular" component={PageAngular} />
                  </Route>
      </Router>
            );
    }

})

module.exports = AppRoutes;
