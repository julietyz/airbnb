import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var ListingService = /** @class */ (function () {
    function ListingService(httpClient) {
        this.httpClient = httpClient;
    }
    ListingService.prototype.getAllListings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get("http://localhost:5000/api/listing")
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                reject(err);
            });
        });
    };
    ListingService.prototype.getById = function (listingId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new HttpHeaders();
            _this.httpClient
                .get("http://localhost:5000/api/listing/getByID/" + listingId, { headers: headers })
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                reject(err);
            });
        });
    };
    ListingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ListingService);
    return ListingService;
}());
export { ListingService };
//# sourceMappingURL=listing.service.js.map