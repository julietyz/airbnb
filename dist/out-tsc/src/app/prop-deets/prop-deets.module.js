import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PropDeetsPage } from './prop-deets.page';
var routes = [
    {
        path: '',
        component: PropDeetsPage
    }
];
var PropDeetsPageModule = /** @class */ (function () {
    function PropDeetsPageModule() {
    }
    PropDeetsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PropDeetsPage]
        })
    ], PropDeetsPageModule);
    return PropDeetsPageModule;
}());
export { PropDeetsPageModule };
//# sourceMappingURL=prop-deets.module.js.map