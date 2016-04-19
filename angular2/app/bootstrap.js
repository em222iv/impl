var browser_1 = require('angular2/platform/browser');
var app_1 = require('./app');
var store_1 = require('./services/store');
var store_2 = require('./services/userStore');
browser_1.bootstrap(app_1.default, [store_1.TodoStore,store_2.UserStore]);
//# sourceMappingURL=bootstrap.js.map
