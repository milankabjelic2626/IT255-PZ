"use strict";
var http_1 = require("@angular/http");
exports.apiUrl = "http://localhost/phpprojekat/";
function prepareFormData(item) {
    var result = "";
    Object.keys(item).forEach(function (key) {
        var append = (encodeURIComponent(key) + "=" + encodeURIComponent(item[key]));
        if (encodeURIComponent(item[key]) == "null") {
            append = encodeURIComponent(key) + "=";
        }
        result += (result == "") ? append : "&" + append;
    });
    return result;
}
exports.prepareFormData = prepareFormData;
exports.defaultPostHeaders = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
function parseErrorToAlert(err) {
    var obj = JSON.parse(err['_body']);
    var element = document.getElementsByClassName('alert')[0];
    element.style.display = 'block';
    element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
}
exports.parseErrorToAlert = parseErrorToAlert;
function getAuthHeaders() {
    return new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'token': localStorage.getItem('token') });
}
exports.getAuthHeaders = getAuthHeaders;
//# sourceMappingURL=constants.js.map