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
var register_service_1 = require("../../services/register.service");
var RegisterComponent = (function () {
    function RegisterComponent(http, router, registerService) {
        this.http = http;
        this.router = router;
        this.registerService = registerService;
        this.registracijaForm = new forms_1.FormGroup({
            ime: new forms_1.FormControl(),
            prezime: new forms_1.FormControl(),
            adresa: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            lozinka: new forms_1.FormControl()
        });
        if (localStorage.getItem('token') != null) {
            /*localStorage.removeItem('token');*/ /*brisanje tokena ako je neko ulogovan!!!!!*/
            this.router.navigate(['/']);
        }
        else {
            this.router.navigate(['/register']);
        }
    }
    RegisterComponent.prototype.onRegistracija = function (model) {
        var _this = this;
        this.registerService.callService(model).subscribe(function (data) {
            localStorage.setItem('token', data['token']);
            _this.router.navigate(['/']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: "./register.html",
        styleUrls: ['app/css/auxiliary.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, register_service_1.RegisterService])
], RegisterComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterComponent;
//# sourceMappingURL=register.component.js.map