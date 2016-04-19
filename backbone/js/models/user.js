/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// User Model
	// ----------

	app.User = Backbone.Model.extend({
		// Initialize with negative/empty defaults
			// These will be overriden after the initial checkAuth
			defaults: {
					logged_in: false,
			},

			initialize: function(){
					_.bindAll(this);

					// Singleton user object
					// Access or listen on this throughout any module with app.user
					this.user = new UserModel({});
			},

			// url: function(){
			// 		return app.API + '/auth';
			// },

			// Toggle the `completed` state of this todo item.
			toggleLogin: function () {
				console.log('model');
			},

			// login: function(opts, callback, args){
			// 	console.log('model');
			//  	var self = this;
			// 	self.set({ logged_in: true });
			// },
			//
			// logout: function(opts, callback, args){
			// 	console.log('model');
			// 	var self = this;
			// 	self.set({ logged_in: false });
			// },

	});

})();
