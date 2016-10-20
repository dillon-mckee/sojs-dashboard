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

var PageStats = React.createClass({


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
     colors:              ['black', 'firebrick']
   });

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
  this._createChart();
    return (
      <div>
        <h1>State of JavaScript 2016: {this.props.name}</h1>
        <div className="segment">
          <div className="flex">

          <div className="half column stat">
              <h6>Interested in using {this.props.name}?</h6>
              <div className="circle" id={this.props.id + '-interest-circle'}></div>
          </div>

            <div className="half column stat">
                <h6>Used {this.props.name} and would use it again?</h6>
                <div className="circle" id={this.props.id + '-satisfaction-circle'}></div>
            </div>
        </div>
        </div>


      </div>

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

var Container = connect(mapStateToProps) (withRouter(PageStats));

module.exports = Container;
