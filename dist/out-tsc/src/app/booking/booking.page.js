import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
import { ListingService } from '../services/listing.service';
var BookingPage = /** @class */ (function () {
    function BookingPage(navCtrl, alertCtrl, bookingService, listingService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.bookingService = bookingService;
        this.listingService = listingService;
        this.listingId = window.localStorage.getItem("listingId");
        this.userId = window.localStorage.getItem("userid");
    }
    BookingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.listingService.getById(this.listingId).then(function (res) {
            _this.listings = res;
            console.log(_this.listings);
        }).catch(function (err) { console.log(err); });
    };
    BookingPage.prototype.navToTrips = function () {
        var _this = this;
        this.dateFrom = this.startMonth + "/" + this.startDay + "/" + this.startYear;
        this.dateTo = this.endMonth + "/" + this.endDay + "/" + this.endYear;
        this.newBooking = {
            listingID: this.listingId,
            userID: this.userId,
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
        };
        console.log(this.newBooking);
        this.bookingService.register(this.newBooking).then(function (res) {
            _this.booking = res;
            _this.navCtrl.navigateForward('trips', {
                queryParams: {
                    booking: res
                }
            });
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    BookingPage.prototype.presentAlert = function (err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert',
                            subHeader: 'Failed to login',
                            message: err,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BookingPage = tslib_1.__decorate([
        Component({
            selector: 'app-booking',
            templateUrl: './booking.page.html',
            styleUrls: ['./booking.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertController,
            BookingService,
            ListingService])
    ], BookingPage);
    return BookingPage;
}());
export { BookingPage };
//# sourceMappingURL=booking.page.js.map