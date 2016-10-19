var actions = require('./actions');
var update = require('react-addons-update');

var initialState = {
  angular2Interest: '',
  angular2NotInterested: '',
  angular2Satisfaction: '',
  angular2NotSatisfied: '',
  reactInterest: '',
  reactNotInterested: '',
  reactSatisfaction: '',
  reactNotSatisfied: '',
  emberInterest: '',
  emberNotInterested: '',
  emberSatisfaction: '',
  emberNotSatisfied: '',
  angularInterest: '',
  angularNotInterested: '',
  angularSatisfaction: '',
  angularNotSatisfied: '',
};

var sojsReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.FETCH_DATA_SUCCESS) {

      var newState = update(state, {
        angular2Interest: {$set: action.data[0].interest.interested},
        angular2NotInterested: {$set: action.data[0].interest.notInterested},
        angular2Satisfaction: {$set: action.data[0].satisfaction.wouldRepeat},
        angular2NotSatisfied: {$set: action.data[0].satisfaction.noRepeat},

        reactInterest: {$set: action.data[1].interest.interested},
        reactNotInterested:{$set: action.data[1].interest.notInterested},
        reactSatisfaction: {$set: action.data[1].satisfaction.wouldRepeat},
        reactNotSatisfied: {$set: action.data[1].satisfaction.noRepeat},

        emberInterest: {$set: action.data[2].interest.interested},
        emberNotInterested: {$set: action.data[2].interest.notInterested},
        emberSatisfaction: {$set: action.data[2].satisfaction.wouldRepeat},
        emberNotSatisfied: {$set: action.data[2].satisfaction.noRepeat},

        angularInterest: {$set: action.data[3].interest.interested},
        angularNotInterested: {$set: action.data[3].interest.notInterested},
        angularSatisfaction: {$set: action.data[3].satisfaction.wouldRepeat},
        angularNotSatisfied: {$set: action.data[3].satisfaction.noRepeat}

      });

      return newState;
  }
    else if (action.type === actions.FETCH_DATA_ERROR) {
      console.log(action.error);
    return state;
        }
    return state;
};

exports.sojsReducer = sojsReducer;
