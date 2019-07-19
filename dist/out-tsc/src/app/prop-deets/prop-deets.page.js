import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
var PropDeetsPage = /** @class */ (function () {
    function PropDeetsPage(navCtrl, listingService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.listingId = window.localStorage.getItem("listingId");
    }
    /*    ionViewWillEnter(){
        this.listingId = window.localStorage.getItem("listingId");
        this.listingService.getById(this.listingId).then(res=>{
          this.listings = res;
          console.log(this.listings);
        }).catch(err => {console.log(err)})
       } */
    PropDeetsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.listingService.getById(this.listingId).then(function (res) {
            _this.listings = res;
        }).catch(function (err) { console.log(err); });
    };
    /*   getListingById(){
        this.listingService.getById(this.listingId).then(res=>{
          this.listings = res;
          console.log(this.listings);
        }).catch(err => {console.log(err)})
      } */
    PropDeetsPage.prototype.navToBooking = function () {
        this.navCtrl.navigateForward("booking");
    };
    PropDeetsPage = tslib_1.__decorate([
        Component({
            selector: 'app-prop-deets',
            templateUrl: './prop-deets.page.html',
            styleUrls: ['./prop-deets.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            ListingService])
    ], PropDeetsPage);
    return PropDeetsPage;
}());
export { PropDeetsPage };
//# sourceMappingURL=prop-deets.page.js.map