var React = require('react');
var NavLink = require('./NavLink');

var DashboardMenu = function(props) {
    return(
        <div className="left column">
        <nav className="side navigation">
          <NavLink to="/dashboard">
            <strong>Dashboard</strong>
            <em>Get an overview of what this application offers.</em>
          </NavLink>
          <NavLink to="/angular-2">
            <strong>Angular 2</strong>
            <em>Feeling sharp enough for Angular 2?</em>
          </NavLink>
          <NavLink to="/react">
            <strong>React</strong>
            <em>Need to quickly update your DOM?</em>
          </NavLink>
          <NavLink to="/ember">
            <strong>Ember</strong>
            <em>Is there still a fire for Ember?</em>
          </NavLink>
          <NavLink to="/angular" >
            <strong>Angular</strong>
            <em>Everything you need and more.</em>
          </NavLink>
          <NavLink to="/compare" >
            <strong>Comparison Tool</strong>
            <em>Compare stats with each other.</em>
          </NavLink>
        </nav>
      </div>

        );
}

module.exports = DashboardMenu;
