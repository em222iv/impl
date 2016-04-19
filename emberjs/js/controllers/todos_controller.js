/*global Todos, Ember */
//var User = require('../models/user')
(function () {
	'use strict';

	Todos.TodosController = Ember.ArrayController.extend({
		actions: {
			login: function () {
				var scope = this;
				Todos.User.login(scope.username,scope.password).then(function(validLogin) {
					if(validLogin){
						scope.set('user',{loggedIn:true})
					}
				}).catch (function (error) {
					console.log('Error: ', error);
				});
			},
			logout: function (){
				scope.set('user',{loggedIn:false})
			},
			createTodo: function () {
				var title, todo;

				// Get the todo title set by the "New Todo" text field
				title = this.get('newTitle').trim();
				if (!title) {
					return;
				}

				// Create the new Todo model
				todo = this.store.createRecord('todo', {
					title: title,
					isCompleted: false
				});
				todo.set('todo',todo);

				// Clear the "New Todo" text field
				this.set('newTitle', '');
			},

			clearCompleted: function () {
				var completed = this.get('completed');
				completed.invoke('deleteRecord');
				completed.invoke('save');
			}
		},

		/* properties */

		remaining: Ember.computed.filterBy('model', 'isCompleted', false),
		completed: Ember.computed.filterBy('model', 'isCompleted', true),

		allAreDone: function (key, value) {
			if (value !== undefined) {
				this.setEach('isCompleted', value);
				return value;
			} else {
				var length = this.get('length');
				var completedLength = this.get('completed.length');

				return length > 0 && length === completedLength;
			}
		}.property('length', 'completed.length')
	});
})();
