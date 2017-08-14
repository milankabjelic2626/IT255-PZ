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
var ProdavniceService = (function () {
    function ProdavniceService(http) {
        this.http = http;
        this.url = constants_1.apiUrl + "getProdavnice.php";
    }
    ProdavniceService.prototype.getProdavnice = function () {
        return this.http.get(this.url, { headers: constants_1.getAuthHeaders() })
            .map(this.extractData);
    };
    ProdavniceService.prototype.extractData = function (res) {
        var obj = JSON.parse(res['_body']);
        return obj.prodavnice;
    };
    return ProdavniceService;
}());
ProdavniceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProdavniceService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProdavniceService;
//# sourceMappingURL=prodavnice.service.js.map