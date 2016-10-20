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

var PageAngular2 = React.createClass({


  _createChart: function() {
   Circles.create({
     id:                  'angular2-satisfaction-circle',
     radius:              70,
     value:               this.props.angular2Satisfaction,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'red']
   });

   Circles.create({
     id:                  'angular2-interest-circle',
     radius:              70,
     value:               this.props.angular2Interest,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'ff9494']
   });

 },


 componentDidMount() {
  this.props.dispatch(actions.fetchData());
  console.log(this.props);
},

render: function() {
  this._createChart();

    return (
      <DashboardPageLayout>
        <h1>State of JavaScript 2016: Angular 2</h1>
        <div className="segment">
          <div className="flex">

          <div className="half column stat">
            <Link to="react">
              <h6>Interested in using Angular 2?</h6>
              <div className="circle" id="angular2-interest-circle"></div>
            </Link>
          </div>

            <div className="half column stat">
              <Link to="angular-2">
                <h6>Used Angular 2 and would use it again?</h6>
                <div className="circle" id="angular2-satisfaction-circle"></div>
              </Link>
            </div>
        </div>
        </div>


      </DashboardPageLayout>


          );
}


})

var mapStateToProps = function(state, props) {
    return {
        angular2Interest: state.angular2Interest,
        angular2NotInterested: state.angular2NotInterested,
        angular2Satisfaction: state.angular2Satisfaction,
        angular2NotSatisfied: state.angular2NotSatisfied,
    };
};

var Container = connect(mapStateToProps) (withRouter(PageAngular2));

module.exports = Container;
