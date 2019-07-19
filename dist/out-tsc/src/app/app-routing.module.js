import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    //{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'saved', loadChildren: './saved/saved.module#SavedPageModule' },
    { path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule' },
    { path: 'inbox', loadChildren: './inbox/inbox.module#InboxPageModule' },
    { path: 'trips', loadChildren: './trips/trips.module#TripsPageModule' },
    { path: 'reg', loadChildren: './reg/reg.module#RegPageModule' },
    { path: 'prop-deets', loadChildren: './prop-deets/prop-deets.module#PropDeetsPageModule' },
    { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map