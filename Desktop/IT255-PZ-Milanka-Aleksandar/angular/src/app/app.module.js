"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_router_1 = require("./app.router");
var home_component_1 = require("./pages/home/home.component");
var forms_2 = require("@angular/forms");
var register_component_1 = require("./pages/register/register.component");
var http_1 = require("@angular/http");
var login_component_1 = require("./pages/login/login.component");
var register_service_1 = require("./services/register.service");
var login_service_1 = require("./services/login.service");
var korpa_component_1 = require("./pages/korpa/korpa.component");
var adminpanel_component_1 = require("./pages/adminPanel/adminpanel.component");
var onama_component_1 = require("./pages/onama/onama.component");
var proizvodi_component_1 = require("./pages/proizvodi/proizvodi.component");
var recepti_component_1 = require("./pages/recepti/recepti.component");
var kontakt_component_1 = require("./pages/kontakt/kontakt.component");
var prodavnice_component_1 = require("./pages/prodavnice/prodavnice.component");
var proizvodi_service_1 = require("./services/proizvodi.service");
var prodavnice_service_1 = require("./services/prodavnice.service");
var korpa_service_1 = require("./services/korpa.service");
var shared_service_1 = require("./services/shared.service");
var user_service_1 = require("./services/user.service");
var admin_service_1 = require("./services/admin.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(app_router_1.appRoutes),
            forms_2.ReactiveFormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.default,
            register_component_1.default,
            login_component_1.default,
            korpa_component_1.default,
            adminpanel_component_1.default,
            onama_component_1.default,
            proizvodi_component_1.default,
            recepti_component_1.default,
            kontakt_component_1.default,
            prodavnice_component_1.default
        ],
        providers: [
            register_service_1.RegisterService,
            login_service_1.LoginService,
            proizvodi_service_1.default,
            prodavnice_service_1.default,
            korpa_service_1.KorpaService,
            shared_service_1.SharedService,
            user_service_1.UserService,
            admin_service_1.AdminService,
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map