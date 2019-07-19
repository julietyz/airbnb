import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
var TripsPage = /** @class */ (function () {
    function TripsPage(navCtrl, bookingService) {
        this.navCtrl = navCtrl;
        this.bookingService = bookingService;
        this.userId = window.localStorage.getItem("userid");
    }
    TripsPage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    TripsPage.prototype.navToSaved = function () {
        this.navCtrl.navigateForward("saved");
    };
    TripsPage.prototype.navToExplore = function () {
        this.navCtrl.navigateForward("explore");
    };
    TripsPage.prototype.navToInbox = function () {
        this.navCtrl.navigateForward("inbox");
    };
    TripsPage.prototype.navToTrips = function () {
        this.navCtrl.navigateForward("trips");
    };
    TripsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingService.getByUserId(this.userId).then(function (res) {
            _this.bookings = res;
            console.log(_this.bookings);
        }).catch(function (err) { console.log(err); });
    };
    TripsPage.prototype.setListings = function () {
        this.bookings.forEach(function (booking) {
            var _this = this;
            this.listingService.getById(booking.listingID).then(function (res) {
                _this.listings.push(res);
            }).catch(function (err) { console.log(err); });
        });
    };
    TripsPage = tslib_1.__decorate([
        Component({
            selector: 'app-trips',
            templateUrl: './trips.page.html',
            styleUrls: ['./trips.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            BookingService])
    ], TripsPage);
    return TripsPage;
}());
export { TripsPage };
//# sourceMappingURL=trips.page.js.map