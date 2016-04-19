
(function () {
    'use strict';
    Todos.User = DS.Model.extend({});

    Todos.User.login = function(username, password) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if(username==="t" && password==="p")
                    resolve(true);
                reject(false);
            }, 3000);
        });
    };

    Todos.User.logout = function() {
        setTimeout(function () {
            return true;
        }, 1000);
    }

})();

