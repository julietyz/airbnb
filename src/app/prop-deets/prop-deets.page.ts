import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-prop-deets',
  templateUrl: './prop-deets.page.html',
  styleUrls: ['./prop-deets.page.scss'],
})
export class PropDeetsPage implements OnInit {
  public listingId: string;
  public listingName: string;
  public listingPrice: string;
  public listingDesc: string;

  constructor(
    private navCtrl: NavController,

  ) {
    this.listingId = window.localStorage.getItem("listingId");
    this.listingName = window.localStorage.getItem("listingName");
    this.listingPrice = window.localStorage.getItem("listingPrice");
    this.listingDesc = window.localStorage.getItem("listingDesc");
   }

  ngOnInit() {
  }

  navToBooking() {
    this.navCtrl.navigateForward("booking");
  }

}
