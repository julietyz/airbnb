import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../Models/listing';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  listings: Array<Listing>;
  listing1 = new Listing("Home in Cape Town", "Cape Town", 1500, "Nice Pool");
  listing2 = new Listing("Apartment in Camps Bay", "Camps Bay", 1500, "Great View");


  constructor(
    private navCtrl: NavController,

  ) {
    this.listings = [this.listing1, this.listing2];
  }

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
  navToSaved() {
    this.navCtrl.navigateForward("saved");
  }

  navToExplore() {
    this.navCtrl.navigateForward("explore");
  }

  navToInbox() {
    this.navCtrl.navigateForward("inbox");
  }

  navToTrips() {
    this.navCtrl.navigateForward("trips");
  }

  ngOnInit() {
  }

}
