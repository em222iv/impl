/*
 * UserActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');
var db = require('../database.js');

var UserActions = {

  onLogin: function(username,password) {
    //utför inloggningsfunktionalitet
    db.login(username,password).then(function(data) {
      if(data){
          AppDispatcher.dispatch({
            actionType: UserConstants.USER_LOGIN,
          })
        }
    }).catch (function (error) {
        console.log('Error: ', error);
    });
  },

  onLogout: function() {
    //utför utloggning
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_LOGOUT,
    });

  },

};

module.exports = UserActions;
