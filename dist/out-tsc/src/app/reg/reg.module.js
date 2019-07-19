import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegPage } from './reg.page';
var routes = [
    {
        path: '',
        component: RegPage
    }
];
var RegPageModule = /** @class */ (function () {
    function RegPageModule() {
    }
    RegPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RegPage]
        })
    ], RegPageModule);
    return RegPageModule;
}());
export { RegPageModule };
//# sourceMappingURL=reg.module.js.map