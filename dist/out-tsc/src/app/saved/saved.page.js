import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var SavedPage = /** @class */ (function () {
    function SavedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SavedPage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    SavedPage.prototype.navToSaved = function () {
        this.navCtrl.navigateForward("saved");
    };
    SavedPage.prototype.navToExplore = function () {
        this.navCtrl.navigateForward("explore");
    };
    SavedPage.prototype.navToInbox = function () {
        this.navCtrl.navigateForward("inbox");
    };
    SavedPage.prototype.navToTrips = function () {
        this.navCtrl.navigateForward("trips");
    };
    SavedPage.prototype.ngOnInit = function () {
    };
    SavedPage = tslib_1.__decorate([
        Component({
            selector: 'app-saved',
            templateUrl: './saved.page.html',
            styleUrls: ['./saved.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], SavedPage);
    return SavedPage;
}());
export { SavedPage };
//# sourceMappingURL=saved.page.js.map