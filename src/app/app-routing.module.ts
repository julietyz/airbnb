import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
