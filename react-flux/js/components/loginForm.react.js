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

var LoginForm = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div id="header">
        <h1>Login</h1>
        <input
          id="username"
          className="input"
          placeholder="username"
          autoFocus={true}
        />
        <input
          id="password"
          className="input password"
          placeholder="password"
        />
      </div>
    );
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */

});

module.exports = LoginForm;
