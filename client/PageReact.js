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

var PageReact = React.createClass({


  _createChart: function() {
   Circles.create({
     id:                  'react-satisfaction-circle',
     radius:              70,
     value:               this.props.reactSatisfaction,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'blue']
   });

   Circles.create({
     id:                  'react-interest-circle',
     radius:              70,
     value:               this.props.reactInterest,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'steelblue']
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
        <h1>State of JavaScript 2016: React</h1>
        <div className="segment">
          <div className="flex">

          <div className="half column stat">
            <Link to="react">
              <h6>Interested in using React?</h6>
              <div className="circle" id="react-interest-circle"></div>
            </Link>
          </div>

            <div className="half column stat">
              <Link to="react-2">
                <h6>Used React and would use it again?</h6>
                <div className="circle" id="react-satisfaction-circle"></div>
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
        reactInterest: state.reactInterest,
        reactNotInterested: state.reactNotInterested,
        reactSatisfaction: state.reactSatisfaction,
        reactNotSatisfied: state.reactNotSatisfied,
    };
};

var Container = connect(mapStateToProps) (withRouter(PageReact));

module.exports = Container;
