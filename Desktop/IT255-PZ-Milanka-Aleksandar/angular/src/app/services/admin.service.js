"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var constants_1 = require("../constants");
var AdminService = (function (_super) {
    __extends(AdminService, _super);
    function AdminService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = constants_1.apiUrl + 'adminaddservice.php';
        _this.urlremove = constants_1.apiUrl + 'adminremoveservice.php';
        return _this;
    }
    AdminService.prototype.callService = function (item) {
        this.headers = constants_1.getAuthHeaders();
        return _super.prototype.callService.call(this, item);
    };
    AdminService.prototype.removeProduct = function (id) {
        var data = "id=" + id;
        var headers = constants_1.getAuthHeaders();
        this.http.post(this.urlremove, data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return data; });
    };
    return AdminService;
}(post_service_1.default));
AdminService = __decorate([
    core_1.Injectable()
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map