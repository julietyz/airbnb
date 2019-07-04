import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../Models/listing';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  items: Array<any> = [];
  email: String;
  listings: Array<Listing>;
  listing1 = new Listing("plain", "blue", 9);
  listing2 = new Listing("flavored", "black", 4);


  constructor(
    private navCtrl: NavController,

  ) {
    this.listings = [this.listing1, this.listing2];

    this.items = [
      {
        name: "Home in Cape Town",
        location: "Cape Town",
        price: 1500
      },
      {
        name: "Apartment in Camps Bay",
        location: "Camps Bay",
        price: 1500
      }
    ]
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
