/*
 * TodoStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UserConstants = require('../constants/UserConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _user = {
  loggedIn: false
}

function login() {
  _user = {
    loggedIn: true
  }
}

function logout() {
  _user = {
    loggedIn: false
  }
}

var UserStore = assign({}, EventEmitter.prototype, {

  userLoggedIn: function() {
    return _user.loggedIn;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    
    case UserConstants.USER_LOGIN:
        login();
        UserStore.emitChange();
        break;

      case UserConstants.USER_LOGOUT:
        logout();
        UserStore.emitChange();
        break;

    default:
      // no op
  }
});

module.exports = UserStore;
