import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
var ExplorePage = /** @class */ (function () {
    function ExplorePage(navCtrl, listingService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
    }
    ExplorePage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    ExplorePage.prototype.navToSaved = function () {
        this.navCtrl.navigateForward("saved");
    };
    ExplorePage.prototype.navToExplore = function () {
        this.navCtrl.navigateForward("explore");
    };
    ExplorePage.prototype.navToInbox = function () {
        this.navCtrl.navigateForward("inbox");
    };
    ExplorePage.prototype.navToTrips = function () {
        this.navCtrl.navigateForward("trips");
    };
    ExplorePage.prototype.navToPropDeets = function (listing) {
        localStorage.setItem('listingId', listing.id);
        this.navCtrl.navigateForward("prop-deets");
    };
    ExplorePage.prototype.ngOnInit = function () {
        var _this = this;
        this.listingService.getAllListings().then(function (res) {
            _this.listings = res;
        }).catch(function (err) { console.log(err); });
    };
    ExplorePage = tslib_1.__decorate([
        Component({
            selector: 'app-explore',
            templateUrl: './explore.page.html',
            styleUrls: ['./explore.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ListingService])
    ], ExplorePage);
    return ExplorePage;
}());
export { ExplorePage };
//# sourceMappingURL=explore.page.js.map