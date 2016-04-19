var db = require('./database');

var User = (function () {
    function User() {
        this.loggedIn = false;
    }
    return User;
})();
exports.User = User;
var UserStore = (function () {
    function UserStore() {
        this.user = new User();
    }
    UserStore.prototype.login = function (username,password) {
      var user = this.user;
      db.login(username,password).then(function(data) {
        if(data){
            user.loggedIn = true;
          }
      }).catch (function (error) {
          console.log('Error: ', error);
      });
      this.user.loggedIn = user.loggedIn;
    };
    UserStore.prototype.logout = function () {
        this.user.loggedIn = false;
    };
    UserStore.prototype.isUserLoggedIn = function (username,password) {
        return this.user.loggedIn;
    };
    return UserStore;
})();
exports.UserStore = UserStore;
//# sourceMappingURL=store.js.map
