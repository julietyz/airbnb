import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
import { ListingService } from '../services/listing.service';



@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage{
  public userId: string;

  public bookings: any;
  public listAndBooks: any[];

  public dummy: any;

  constructor(
    private navCtrl: NavController,
    private bookingService: BookingService,
    private listingService: ListingService


  ) {
    this.userId = window.localStorage.getItem("userid");
    this.listAndBooks = [];

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

  ionViewWillEnter() {
    this.bookings = []; 
    this.listAndBooks = [];
    
    this.bookingService.getByUserId(this.userId).then(res => {
      //this.userId
      this.bookings = res;
      if (this.bookings.length == 0) {
        this.dummy = {
          name: "You have no upcoming trips",
          dateTo: "",
          dateFrom: "Start plannig your next getaway through our Explore tab!",
          imgUrl: ""
        }
        this.listAndBooks.push(this.dummy);
      }
      for (let booking of this.bookings) {
        //console.log(booking.listingID); 
        this.listingService.getById(booking.listingID).then(res => {
          //console.log(res);
          this.dummy = {
            intro: "You Booked",
            name: res[0].name,
            dateTo: "To: " + booking.dateTo,
            dateFrom: "From: " + booking.dateFrom,
            location: "In " + res[0].location,
            status: "Status: " + booking.status,
            imgUrl: res[0].imgUrl
          }
          this.listAndBooks.push(this.dummy);
        }).catch(err => { console.log(err) })
      }

    }).catch(err => { console.log(err) })

  }

}
