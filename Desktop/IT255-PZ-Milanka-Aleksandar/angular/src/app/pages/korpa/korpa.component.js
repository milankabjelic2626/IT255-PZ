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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var korpa_service_1 = require("../../services/korpa.service");
var user_service_1 = require("../../services/user.service");
var shared_service_1 = require("../../services/shared.service");
var TimerObservable_1 = require("rxjs/observable/TimerObservable");
var KorpaComponent = (function () {
    function KorpaComponent(http, router, cartService, userService, sharedService) {
        this.http = http;
        this.router = router;
        this.cartService = cartService;
        this.userService = userService;
        this.sharedService = sharedService;
        this.totalPrice = 0;
        this.isDone = false;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['/']);
        }
    }
    KorpaComponent.prototype.ngOnInit = function () {
        this.loadCart();
        this.loadUser();
    };
    KorpaComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    KorpaComponent.prototype.loadCart = function () {
        var _this = this;
        this.cartService.getCart()
            .subscribe(function (data) {
            _this.prKorpa = data;
        });
    };
    KorpaComponent.prototype.remove = function (product_id) {
        this.cartService.removeFromCart(product_id);
    };
    KorpaComponent.prototype.checkout = function () {
        var _this = this;
        this.isDone = true;
        this.cartService.checkout();
        var timer = TimerObservable_1.TimerObservable.create(1000, 500);
        timer.subscribe(function (t) {
            location.reload();
            _this.router.navigate(['/korpa']);
        });
    };
    KorpaComponent.prototype.update = function (product_id, quantity) {
        this.cartService.updateInCart(product_id, quantity);
    };
    KorpaComponent.prototype.postarina = function () {
        var postarina = 0;
        postarina = this.getTotal() * 0.1;
        return postarina;
    };
    KorpaComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.prKorpa.length; i++) {
            if (this.prKorpa[i].cena) {
                total += this.prKorpa[i].cena * this.prKorpa[i].kolicina;
                this.totalPrice = total;
                this.idKorpe = this.prKorpa[i].idKorpe;
            }
        }
        return total;
    };
    KorpaComponent.prototype.getUkupno = function () {
        return this.getTotal() + this.postarina();
    };
    return KorpaComponent;
}());
KorpaComponent = __decorate([
    core_1.Component({
        selector: 'korpa',
        templateUrl: './korpa.html',
        styleUrls: ['app/css/home.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, korpa_service_1.KorpaService, user_service_1.UserService, shared_service_1.SharedService])
], KorpaComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KorpaComponent;
//# sourceMappingURL=korpa.component.js.map