import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var BookingService = /** @class */ (function () {
    function BookingService(httpClient) {
        this.httpClient = httpClient;
    }
    BookingService.prototype.getAllBookings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get("http://localhost:5000/api/booking")
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                reject(err);
            });
        });
    };
    BookingService.prototype.register = function (newBooking) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.httpClient
                .post("http://localhost:5000/api/booking", newBooking, { headers: headers })
                .subscribe(function (response) {
                console.log(response.id);
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                console.log(err.error);
                reject(err.error);
            });
        });
    };
    BookingService.prototype.getByUserId = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.httpClient
                .get("http://localhost:5000/api/booking/getByUserID/" + userId, { headers: headers })
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                reject(err);
            });
        });
    };
    BookingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BookingService);
    return BookingService;
}());
export { BookingService };
//# sourceMappingURL=booking.service.js.map