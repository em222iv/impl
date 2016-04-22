/*jshint unused:false */
	'use strict';
	const db = require('./database');
	var STORAGE_KEY = 'todos-vuejs';
	var userLoggedIn = false;

	exports.todoStorage = {
		fetch: function () {
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (todos) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};
	exports.userStorage = {
    login: function (username,password) {
			console.log(username,password);
			return db.login(username,password).then(function(data) {
        if(data){
           return data;
        }
      }).catch (function (error) {
          console.log('Error: ', error);
      });
    },
    logout: function () {
        userLoggedIn = false;;
    },
		isUserLoggedIn: function (auth) {
				return userLoggedIn;
		}
	};
