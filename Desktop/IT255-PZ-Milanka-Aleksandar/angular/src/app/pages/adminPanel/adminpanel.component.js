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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var admin_service_1 = require("../../services/admin.service");
var proizvodi_service_1 = require("../../services/proizvodi.service");
var user_service_1 = require("../../services/user.service");
var AdminPanelComponent = (function () {
    function AdminPanelComponent(http, router, adminService, proizvodiService, _userService) {
        this.http = http;
        this.router = router;
        this.adminService = adminService;
        this.proizvodiService = proizvodiService;
        this._userService = _userService;
        this.addProductForm = new forms_1.FormGroup({
            ime: new forms_1.FormControl(),
            katID: new forms_1.FormControl(),
            opis: new forms_1.FormControl(),
            cena: new forms_1.FormControl(),
            url: new forms_1.FormControl(),
            akcija: new forms_1.FormControl(),
        });
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
    }
    AdminPanelComponent.prototype.addProduct = function (model) {
        var _this = this;
        this.adminService.callService(model).subscribe(function (data) {
            _this.router.navigate(['/']);
        });
    };
    AdminPanelComponent.prototype.ngOnInit = function () {
        this.loadProizvodi();
    };
    AdminPanelComponent.prototype.loadProizvodi = function () {
        var _this = this;
        var $;
        this.proizvodiService.getProizvodi().subscribe(function (data) {
            _this.proizvodi = data;
            setInterval(function () {
                $ = window['jQuery'];
                $('table').DataTable();
            }.bind(_this), 400);
        });
    };
    AdminPanelComponent.prototype.remove = function (id) {
        this.adminService.removeProduct(id);
    };
    return AdminPanelComponent;
}());
AdminPanelComponent = __decorate([
    core_1.Component({
        selector: 'adminpanel',
        templateUrl: "./adminpanel.html",
        styleUrls: ['app/css/home.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, admin_service_1.AdminService, proizvodi_service_1.default, user_service_1.UserService])
], AdminPanelComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AdminPanelComponent;
//# sourceMappingURL=adminpanel.component.js.map