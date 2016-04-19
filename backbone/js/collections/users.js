/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Users = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.User,

		// Filter down the list of all todo items that are finished.
		userLoggedIn: function () {
			return "user not loggedIn"
		},

		toggleLogin: function (auth) {
			return auth;
		}

	});

	// Create our global collection of **Todos**.
	app.users = new Users();
})();
