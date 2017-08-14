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
var prodavnice_service_1 = require("../../services/prodavnice.service");
var router_1 = require("@angular/router");
var ProdavniceComponent = (function () {
    function ProdavniceComponent(prodavniceService, route) {
        var _this = this;
        this.prodavniceService = prodavniceService;
        this.route = route;
        var $;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    }
    ProdavniceComponent.prototype.ngOnInit = function () {
        this.loadProdavnice();
    };
    ProdavniceComponent.prototype.loadProdavnice = function () {
        var _this = this;
        var $;
        this.prodavniceService.getProdavnice().subscribe(function (data) {
            _this.prodavnice = data;
            setInterval(function () {
                $ = window['jQuery'];
                $('table').DataTable();
            }.bind(_this), 400);
        });
    };
    ProdavniceComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProdavniceComponent;
}());
ProdavniceComponent = __decorate([
    core_1.Component({
        selector: 'prodavnice',
        templateUrl: './prodavnice.html',
        styleUrls: ['./prodavnice.css'],
    }),
    __metadata("design:paramtypes", [prodavnice_service_1.default, router_1.ActivatedRoute])
], ProdavniceComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProdavniceComponent;
//# sourceMappingURL=prodavnice.component.js.map