/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var UserActions = require('../actions/UserActions');
var ReactPropTypes = React.PropTypes;


function getTodoState() {
  return {
    loggedIn: UserStore.userLoggedIn(),
  };
}
var AuthButton = React.createClass({

  render: function() {
    return (
      <button id="auth-button" className={this.props.event} onClick={this._onAuth}>{this.props.event}</button>
    );
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
   _onAuth: function() {
        if(this.props.event == "login")
          return UserActions.onLogin(document.getElementById('username').value,document.getElementById('password').value);
        return UserActions.onLogout();
   },

});

module.exports = AuthButton;
