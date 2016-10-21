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

var PageCompare = React.createClass({
  getInitialState: function() {
      return {
          dropdownA: '___',
          dropdownB: '___'
      };
  },

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

componentDidUpdate(){
  this.props.dispatch(actions.fetchData());
  this._createChart();
},

dropdownAChange: function(event){
  if (event.target.value == this.state.dropdownB)
  {return window.alert("Please choose two different items to compare")}
  this.setState({dropdownA:event.target.value})
},

dropdownBChange: function(event){
  if (event.target.value == this.state.dropdownA)
  {return window.alert("Please choose two different items to compare")}

  this.setState({dropdownB:event.target.value})
},

render: function() {
  this._createChart();
  console.log(this.state);
    return (
      <div>
        <h1>State of JavaScript 2016: Comparison Tool</h1>
        <div className="segment">
          <div className="flex">


          <div className="one third column stat">

            <select onChange={this.dropdownAChange} value={this.state.dropdownA}>
              <option value="__">Choose an option...</option>
              <option value="angular2">Angular 2</option>
              <option value="react">React</option>
              <option value="ember">Ember</option>
              <option value="angular">Angular</option>
            </select>
          </div>

            <div className="one third column stat">
                <h6>Interested in using <p className="stat-title">{this.state.dropdownA}</p>?</h6>
                <div className="circle" id={this.state.dropdownA + '-interest-circle'}></div>
            </div>


                <div className="one third column stat">
                    <h6>Used <p className="stat-title">{this.state.dropdownA}</p> and would use it again?</h6>
                    <div className="circle" id={this.state.dropdownA + '-satisfaction-circle'}></div>
                </div>


                <div className="one third column stat">
                <select onChange={this.dropdownBChange} value={this.state.dropdownB}>
                  <option value="__">Choose an option...</option>
                  <option value="angular2">Angular 2</option>
                  <option value="react">React</option>
                  <option value="ember">Ember</option>
                  <option value="angular">Angular</option>
                </select>
                </div>

                <div className="one third column stat">
                    <h6>Interested in using <p className="stat-title">{this.state.dropdownB}</p>?</h6>
                    <div className="circle" id={this.state.dropdownB + '-interest-circle'}></div>
                </div>

                <div className="one third column stat">
                    <h6>Used <p className="stat-title">{this.state.dropdownB}</p> and would use it again?</h6>
                    <div className="circle" id={this.state.dropdownB + '-satisfaction-circle'}></div>
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

var Container = connect(mapStateToProps) (withRouter(PageCompare));

module.exports = Container;
