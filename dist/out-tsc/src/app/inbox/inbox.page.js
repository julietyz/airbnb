import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InboxPage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    InboxPage.prototype.navToSaved = function () {
        this.navCtrl.navigateForward("saved");
    };
    InboxPage.prototype.navToExplore = function () {
        this.navCtrl.navigateForward("explore");
    };
    InboxPage.prototype.navToInbox = function () {
        this.navCtrl.navigateForward("inbox");
    };
    InboxPage.prototype.navToTrips = function () {
        this.navCtrl.navigateForward("trips");
    };
    InboxPage.prototype.ngOnInit = function () {
    };
    InboxPage = tslib_1.__decorate([
        Component({
            selector: 'app-inbox',
            templateUrl: './inbox.page.html',
            styleUrls: ['./inbox.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], InboxPage);
    return InboxPage;
}());
export { InboxPage };
//# sourceMappingURL=inbox.page.js.map