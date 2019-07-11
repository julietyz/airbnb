import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';



@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  public listings: any;

  constructor( 
    private navCtrl: NavController,
    private listingService: ListingService
    ) { }

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
    this.listingService.getAllListings().then(res=>{
      this.listings = res;
    }).catch(err => {console.log(err)})
  }


}
