import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthService.prototype.login = function (authUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.httpClient
                .post("http://localhost:5000/api/auth/login", authUser, { headers: headers })
                .subscribe(function (response) {
                console.log(response.id);
                localStorage.setItem('userid', response.id);
                localStorage.setItem('firstName', response.firstName);
                localStorage.setItem('cellPhone', response.cellPhone);
                localStorage.setItem('email', response.email);
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                console.log(err.error);
                reject(err.error);
            });
        });
    };
    AuthService.prototype.register = function (newUser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.httpClient
                .post("http://localhost:5000/api/auth/register", newUser, { headers: headers })
                .subscribe(function (response) {
                console.log(response.id);
                localStorage.setItem('userid', newUser.id);
                localStorage.setItem('firstName', newUser.firstName);
                localStorage.setItem('cellPhone', newUser.cellPhone);
                localStorage.setItem('email', newUser.email);
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                console.log(err.error);
                reject(err.error);
            });
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map