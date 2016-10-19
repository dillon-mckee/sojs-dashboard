var React = require('react');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var Link = router.Link;

var NavLink = function(props) {
    return(
        <Link {...props} activeClassName="active" className={props.classes || 'item'}>
        {props.children}
      </Link>

        );
}

module.exports = NavLink;
