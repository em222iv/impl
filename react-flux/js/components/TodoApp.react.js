/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var LoginForm = require('./LoginForm.react.js');
var AuthButton = require('./AuthButton.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');
var UserStore = require('../stores/UserStore');
var UserActions = require('../actions/UserActions');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete(),
    loggedIn: UserStore.userLoggedIn(),
  };
}

var TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {

    var authContent;
    var authenticationEvent;
    var footer;
    var main;
    if(this.state.loggedIn) {
      authContent = <Header />
      authenticationEvent = "logout";
      footer = <Footer allTodos={this.state.allTodos} />;
      main = <MainSection
        allTodos={this.state.allTodos}
        areAllComplete={this.state.areAllComplete}
      />;
    }
    else {
      authContent = <LoginForm />
      authenticationEvent = "login";
      footer = "";
      main = "";
    }

    return (
      <div>
        {authContent}
        {main}
        {footer}
        <AuthButton event={authenticationEvent}/>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  },

});

module.exports = TodoApp;
