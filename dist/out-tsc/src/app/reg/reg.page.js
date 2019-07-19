import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
var RegPage = /** @class */ (function () {
    function RegPage(alertctl, navCtrl, authService, userService) {
        this.alertctl = alertctl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.userService = userService;
    }
    RegPage.prototype.navToLogin = function () {
        this.navCtrl.navigateForward("home");
    };
    RegPage.prototype.createUser = function () {
        var _this = this;
        var newUser = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            cellPhone: this.cellPhone,
            role: "user"
        };
        this.authService.register(newUser).then(function (res) {
            _this.user = res;
            _this.navCtrl.navigateForward('profile', {
                queryParams: {
                    user: res
                }
            });
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    RegPage.prototype.presentAlert = function (err) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertctl.create({
                            header: 'Alert',
                            subHeader: 'Failed to register',
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
    RegPage.prototype.ngOnInit = function () {
    };
    RegPage = tslib_1.__decorate([
        Component({
            selector: 'app-reg',
            templateUrl: './reg.page.html',
            styleUrls: ['./reg.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            NavController,
            AuthService,
            UserService])
    ], RegPage);
    return RegPage;
}());
export { RegPage };
//# sourceMappingURL=reg.page.js.map