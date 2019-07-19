import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
//import { User } from '../models/user';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.id = window.localStorage.getItem('userid');
        this.firstName = window.localStorage.getItem('firstName');
        this.cellPhone = window.localStorage.getItem('cellPhone');
        this.email = window.localStorage.getItem('email');
        // const currentUser = this.userService.getLoggedInUser();
    }
    ProfilePage.prototype.getUserById = function () {
    };
    ProfilePage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    ProfilePage.prototype.navToSaved = function () {
        this.navCtrl.navigateForward("saved");
    };
    ProfilePage.prototype.navToExplore = function () {
        this.navCtrl.navigateForward("explore");
    };
    ProfilePage.prototype.navToInbox = function () {
        this.navCtrl.navigateForward("inbox");
    };
    ProfilePage.prototype.navToTrips = function () {
        this.navCtrl.navigateForward("trips");
    };
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            UserService])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map