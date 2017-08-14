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
require("rxjs/Rx");
var http_1 = require("@angular/http");
var proizvodi_service_1 = require("../../services/proizvodi.service");
var router_1 = require("@angular/router");
var korpa_service_1 = require("../../services/korpa.service");
var ProizvodiComponent = (function () {
    function ProizvodiComponent(http, proizvodiService, korpaService, route) {
        var _this = this;
        this.http = http;
        this.proizvodiService = proizvodiService;
        this.korpaService = korpaService;
        this.route = route;
        var $;
        this.isAuth = localStorage.getItem('token');
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    }
    ProizvodiComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    ProizvodiComponent.prototype.loadProducts = function () {
        var _this = this;
        this.proizvodiService.getProizvodi()
            .subscribe(function (data) { return _this.products = data; });
    };
    ProizvodiComponent.prototype.dodajUKorpu = function (id) {
        id = parseFloat(id.toString());
        this.korpaService.addToCart(id, 1);
    };
    ProizvodiComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProizvodiComponent;
}());
ProizvodiComponent = __decorate([
    core_1.Component({
        selector: 'proizvodi',
        templateUrl: './proizvodi.html',
        styleUrls: ['app/css/home.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http, proizvodi_service_1.default, korpa_service_1.KorpaService, router_1.ActivatedRoute])
], ProizvodiComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProizvodiComponent;
//# sourceMappingURL=proizvodi.component.js.map