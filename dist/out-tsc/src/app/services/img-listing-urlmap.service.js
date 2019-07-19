import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ImgListingURLMapService = /** @class */ (function () {
    function ImgListingURLMapService(httpClient) {
        this.httpClient = httpClient;
    }
    ImgListingURLMapService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient
                .get("http://localhost:5000/api/imgMap")
                .subscribe(function (response) {
                resolve(response);
            }, function (err) {
                console.log(err.error.message);
                reject(err);
            });
        });
    };
    ImgListingURLMapService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ImgListingURLMapService);
    return ImgListingURLMapService;
}());
export { ImgListingURLMapService };
//# sourceMappingURL=img-listing-urlmap.service.js.map