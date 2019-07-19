import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { BookingService } from '../services/booking.service';
import { AuthService } from '../services/auth.service';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, userService, alertCtrl, listingService, bookingService, authService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.listingService = listingService;
        this.bookingService = bookingService;
        this.authService = authService;
        //console.log("in home");
    }
    HomePage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    HomePage.prototype.navToReg = function () {
        this.navCtrl.navigateForward("reg");
    };
    HomePage.prototype.login = function () {
        var _this = this;
        // let authUser = new User(this.eamil,this.password); -- I would do this (add user model)
        var authUser = {
            email: this.email,
            password: this.password
        };
        this.userService.logIn(authUser).then(function (user) {
            _this.navCtrl.navigateForward('profile', user);
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    HomePage.prototype.register = function () {
        alert("Feature coming soon!");
        // This should navigate to the register page:
    };
    HomePage.prototype.presentAlert = function (err) {
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
    HomePage.prototype.getUserById = function () {
        var _this = this;
        this.userService.getById(this.id).then(function (res) {
            _this.users = res;
        }).catch(function (err) { console.log(err); });
    };
    HomePage.prototype.getListings = function () {
        var _this = this;
        this.listingService.getAllListings().then(function (res) {
            _this.listings = res;
        }).catch(function (err) { console.log(err); });
    };
    HomePage.prototype.getBookings = function () {
        var _this = this;
        this.bookingService.getAllBookings().then(function (res) {
            _this.bookings = res;
        }).catch(function (err) { console.log(err); });
    };
    HomePage.prototype.loginBackend = function () {
        var _this = this;
        var authUser = {
            email: this.email,
            password: this.password
        };
        this.authService.login(authUser).then(function (res) {
            var testId = localStorage.getItem("userid");
            console.log(testId);
            _this.navCtrl.navigateForward('profile', {
                queryParams: {
                    user: res
                }
            });
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            UserService,
            AlertController,
            ListingService,
            BookingService,
            AuthService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map