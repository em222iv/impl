var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var store_1 = require('./services/store');
var store_2 = require('./services/userStore');

var TodoApp = (function () {
    function TodoApp(todoStore,userStore) {
        this.newTodoText = '';
        this.username = '';
        this.password = '';
        this.todoStore = todoStore;
        this.userStore = userStore;
        this.user = userStore.user;
    }
    TodoApp.prototype.stopEditing = function (todo, editedTitle) {
        todo.title = editedTitle;
        todo.editing = false;
    };
    TodoApp.prototype.cancelEditingTodo = function (todo) {
        todo.editing = false;
    };
    TodoApp.prototype.updateEditingTodo = function (todo, editedTitle) {
        editedTitle = editedTitle.trim();
        todo.editing = false;
        if (editedTitle.length === 0) {
            return this.todoStore.remove(todo);
        }
        todo.title = editedTitle;
    };
    TodoApp.prototype.editTodo = function (todo) {
        todo.editing = true;
    };
    TodoApp.prototype.removeCompleted = function () {
        this.todoStore.removeCompleted();
    };
    TodoApp.prototype.toggleCompletion = function (todo) {
        this.todoStore.toggleCompletion(todo);
    };
    TodoApp.prototype.remove = function (todo) {
        this.todoStore.remove(todo);
    };
    TodoApp.prototype.addTodo = function () {
        if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
    };
    TodoApp.prototype.loginUser = function () {
        this.userStore.login(this.username,this.password);
    };
    TodoApp.prototype.logoutUser = function () {
        this.username = '';
        this.password = '';
        this.userStore.logout();
    };
    TodoApp.prototype.userLoggedIn = function (user) {
          user.loggedIn = this.userStore.isUserLoggedIn;
    };
    TodoApp = __decorate([
        core_1.Component({
            selector: 'todo-app',
            templateUrl: 'app/app.html'
        }),
        __metadata('design:paramtypes', [store_1.TodoStore,store_2.UserStore])
    ], TodoApp);
    return TodoApp;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoApp;
//# sourceMappingURL=app.js.map
