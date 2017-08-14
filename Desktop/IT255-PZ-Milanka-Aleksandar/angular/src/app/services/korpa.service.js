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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var constants_1 = require("../constants");
var KorpaService = (function () {
    function KorpaService(http) {
        this.http = http;
        this.urladd = constants_1.apiUrl + 'korpaaddservice.php';
        this.urlremove = constants_1.apiUrl + 'korparemoveservice.php';
        this.urlupdate = constants_1.apiUrl + 'korpaupdateservice.php';
        this.urlcheckout = constants_1.apiUrl + 'korpacheckoutservice.php';
        this.urlget = constants_1.apiUrl + 'korpagetservice.php';
    }
    KorpaService.prototype.addToCart = function (product_id, quantity) {
        var data = "product_id=" + product_id + "&quantity=" + quantity;
        var headers = constants_1.getAuthHeaders();
        this.http.post(this.urladd, data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    KorpaService.prototype.removeFromCart = function (product_id) {
        var data = "product_id=" + product_id;
        var headers = constants_1.getAuthHeaders();
        this.http.post(this.urlremove, data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return data; });
    };
    KorpaService.prototype.updateInCart = function (product_id, quantity) {
        var data = "product_id=" + product_id + "&quantity=" + quantity;
        var headers = constants_1.getAuthHeaders();
        this.http.post(this.urlupdate, data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return data; });
    };
    KorpaService.prototype.checkout = function () {
        var headers = constants_1.getAuthHeaders();
        this.http.get(this.urlcheckout, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return data; });
    };
    KorpaService.prototype.getCart = function () {
        var headers = constants_1.getAuthHeaders();
        return this.http.get(this.urlget, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    return KorpaService;
}());
KorpaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], KorpaService);
exports.KorpaService = KorpaService;
//# sourceMappingURL=korpa.service.js.map