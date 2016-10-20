var React = require('react');
var connect = require('react-redux').connect;
var DashboardMenu = require('./DashboardMenu');
var DashboardPageLayout = require('./DashboardPageLayout');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var withRouter = router.withRouter;
var Link = router.Link;

var actions = require('./actions');

var PageAngular = React.createClass({


  _createChart: function() {
   Circles.create({
     id:                  'angular-satisfaction-circle',
     radius:              70,
     value:               this.props.angularSatisfaction,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'mediumvioletred']
   });

   Circles.create({
     id:                  'angular-interest-circle',
     radius:              70,
     value:               this.props.angularInterest,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'palevioletred']
   });

 },


 componentDidMount() {
  this.props.dispatch(actions.fetchData());
  this._createChart();
  console.log(this.props);
},

render: function() {

    return (
      <div>
        <h1>State of JavaScript 2016: Angular </h1>
        <div className="segment">
          <div className="flex">

          <div className="half column stat">
            <Link to="react">
              <h6>Interested in using Angular?</h6>
              <div className="circle" id="angular-interest-circle"></div>
            </Link>
          </div>

            <div className="half column stat">
              <Link to="angular-2">
                <h6>Used Angular and would use it again?</h6>
                <div className="circle" id="angular-satisfaction-circle"></div>
              </Link>
            </div>
        </div>
        </div>


      </div>


          );
}


})

var mapStateToProps = function(state, props) {
    return {
        angularInterest: state.angularInterest,
        angularNotInterested: state.angularNotInterested,
        angularSatisfaction: state.angularSatisfaction,
        angularNotSatisfied: state.angularNotSatisfied,
    };
};

var Container = connect(mapStateToProps) (withRouter(PageAngular));

module.exports = Container;
