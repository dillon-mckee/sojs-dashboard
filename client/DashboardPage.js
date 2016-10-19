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

var DashboardPage = React.createClass({


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
     id:                  'react-satisfaction-circle',
     radius:              70,
     value:               this.props.reactSatisfaction,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'blue']
   });

   Circles.create({
     id:                  'ember-satisfaction-circle',
     radius:              70,
     value:               this.props.emberSatisfaction,
     maxValue:            100,
     width:               10,
     text:                function(value){return value + '%';},
     colors:              ['black', 'orange']
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
        <h1>State of JavaScript 2016</h1>
        <div className="segment">
          <div className="flex">
            <Link to="angular-2" className="one third column stat">
              <h6>Used Angular 2 and would use it again?</h6>
              <div className="circle" id="angular2-satisfaction-circle"></div>
            </Link>

            <Link to="react" className="one third column stat">
              <h6>Used React and would use it again?</h6>
              <div className="circle" id="react-satisfaction-circle"></div>
            </Link>

            <Link to="ember" className="one third column stat">
              <h6>Used Ember and would use it again?</h6>
              <div className="circle" id="ember-satisfaction-circle"></div>
            </Link>
          </div>
          </div>
           <div className="segment">

          <div className="two thirds column left">
            <h3>What People Are Saying</h3>
            {/*<Feed />*/}
          </div>

          <div className="one third column right">
            <h3>Latest News</h3>
            <dl className="news">
              <dt>
                <a href="#">How to combine Angular 2, React and Aurelia just because.</a>
              </dt>
              <dd>
                Posted on November 3, 2016
              </dd>
              <dt>
                <a href="#">Is it too soon for React 2?</a>
              </dt>
              <dd>
                Posted on November 2, 2016
              </dd>
              <dt>
                <a href="#">Why Aurelia is about to bring Meteor crashing down.</a>
              </dt>
              <dd>
                Posted on October 29, 2016
              </dd>
            </dl>
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
        reactInterest: state.reactInterest,
        reactNotInterested: state.reactNotInterested,
        reactSatisfaction: state.reactSatisfaction,
        reactNotSatisfied: state.reactNotSatisfied,
        emberInterest: state.emberInterest,
        emberNotInterested: state.emberNotInterested,
        emberSatisfaction: state.emberSatisfaction,
        emberNotSatisfied: state.emberNotSatisfied,
        angularInterest: state.angularInterest,
        angularNotInterested: state.angularNotInterested,
        angularSatisfaction: state.angularSatisfaction,
        angularNotSatisfied: state.angularNotSatisfied
    };
};

var Container = connect(mapStateToProps) (withRouter(DashboardPage));

module.exports = Container;
