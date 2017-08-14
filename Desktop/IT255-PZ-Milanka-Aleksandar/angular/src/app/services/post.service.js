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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var constants_1 = require("../constants");
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.url = constants_1.apiUrl;
        this.headers = constants_1.defaultPostHeaders;
    }
    PostService.prototype.callService = function (item) {
        var data = constants_1.prepareFormData(item);
        return this.http.post(this.url, data, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    PostService.prototype.extractData = function (res) {
        var obj = JSON.parse(res['_body']);
        return obj;
    };
    PostService.prototype.handleError = function (error) {
        constants_1.parseErrorToAlert(error);
        return Observable_1.Observable.throw("Error");
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PostService;
//# sourceMappingURL=post.service.js.map