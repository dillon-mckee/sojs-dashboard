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

var PageEmber = React.createClass({


  _createChart: function() {
   Circles.create({
     id:                  'ember-satisfaction-circle',
     radius:              70,
     value:               this.props.emberSatisfaction,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'orange']
   });

   Circles.create({
     id:                  'ember-interest-circle',
     radius:              70,
     value:               this.props.emberInterest,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'coral']
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
        <h1>State of JavaScript 2016: Ember</h1>
        <div className="segment">
          <div className="flex">

          <div className="half column stat">
            <Link to="react">
              <h6>Interested in using Ember?</h6>
              <div className="circle" id="ember-interest-circle"></div>
            </Link>
          </div>

            <div className="half column stat">
              <Link to="angular-2">
                <h6>Used Ember and would use it again?</h6>
                <div className="circle" id="ember-satisfaction-circle"></div>
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
        emberInterest: state.emberInterest,
        emberNotInterested: state.emberNotInterested,
        emberSatisfaction: state.emberSatisfaction,
        emberNotSatisfied: state.emberNotSatisfied,
    };
};

var Container = connect(mapStateToProps)(PageEmber);

module.exports = Container;
