var React = require('react');
var DashboardMenu = require('./DashboardMenu');

var DashboardPageLayout = function(props) {
    return(
        <section>
            <DashboardMenu />
            <div className="right column dashmain">
            {props.children}
            </div>
        </section>
        );
}

module.exports = DashboardPageLayout
