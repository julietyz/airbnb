/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
} */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.users = [
            {
                id: 23,
                firstName: 'John',
                lastName: 'Doe',
                cellPhone: 9,
                email: 'john@mail.com',
                password: '123',
                role: "user"
            },
            {
                id: 25,
                firstName: 'Samantha',
                lastName: 'Right',
                cellPhone: 10,
                email: 'sam@mail.com',
                password: '123',
                role: "user"
            },
            {
                id: 26,
                firstName: 'Julia',
                lastName: 'Richards',
                cellPhone: 11,
                email: 'julia@mail.com',
                password: '123',
                role: "user"
            },
        ];
    }
    UserService.prototype.logIn = function (Authuser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Please note that this will call the API noce we have created it - But for now:
            var user = _this.users.filter(function (dbUser) {
                return dbUser.email === Authuser.email;
            });
            // This logic will be on the backend we will just return success or erroe HTTP response - But for now:
            if (user.length) {
                if (Authuser.password === user[0].password) {
                    _this.setLoggedInUser(user[0]);
                    window.localStorage.setItem('firstName', user[0].firstName);
                    resolve(user[0]);
                }
                else {
                    reject(new Error('Incorrect password'));
                }
            }
            else {
                reject(new Error("User doesn't exist"));
            }
        });
    };
    UserService.prototype.setLoggedInUser = function (user) {
        this.loggedInUser = user;
    };
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get("http://localhost:5000/api/user")
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                reject(err);
            });
        });
    };
    UserService.prototype.getById = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.httpClient
                .get("http://localhost:5000/api/user/getByID/" + userId, { headers: headers })
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                reject(err);
            });
        });
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map