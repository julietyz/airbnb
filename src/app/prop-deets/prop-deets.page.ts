import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';



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

  public dummy: any;
  public listings: any;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService

  ) {
    this.listingId = window.localStorage.getItem("listingId");
   }

/*    ionViewWillEnter(){
    this.listingId = window.localStorage.getItem("listingId");
    this.listingService.getById(this.listingId).then(res=>{
      this.listings = res;
      console.log(this.listings);
    }).catch(err => {console.log(err)})
   } */

  ngOnInit() {
    this.listingService.getById(this.listingId).then(res=>{
      this.listings = res;
    }).catch(err => {console.log(err)})
  }

/*   getListingById(){
    this.listingService.getById(this.listingId).then(res=>{
      this.listings = res;
      console.log(this.listings);
    }).catch(err => {console.log(err)})
  } */

  navToBooking() {
    this.navCtrl.navigateForward("booking");
  }

}
