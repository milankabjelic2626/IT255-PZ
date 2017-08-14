"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./services/user.service");
var AppComponent = (function () {
    function AppComponent(router, _userService) {
        var _this = this;
        this._userService = _userService;
        /*   this.token.token = JSON.parse(localStorage.getItem('token'));*/
        this.router = router;
        this.router.events.subscribe(function () {
            _this.isAuth = localStorage.getItem('token') !== null;
            if (localStorage.getItem('token') !== null) {
                _this.loadUser();
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') !== null) {
            this.loadUser();
        }
    };
    AppComponent.prototype.loadUser = function () {
        var _this = this;
        this._userService.getUser()
            .subscribe(function (data) { return _this.korisnik = data; });
    };
    AppComponent.prototype.onLogout = function () {
        this.router.navigate(['./']);
        localStorage.removeItem('token');
        this.isAuth = localStorage.getItem('token') !== null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'projekat',
        templateUrl: './router.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map