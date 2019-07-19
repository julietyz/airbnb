import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
import { ListingService } from '../services/listing.service';




@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  public listingId: string;
  public userId: string;

  public listings: any;

  public newBooking: any;
  public booking: any;

  public dateFrom: string;
  public dateTo: string;

  startDay: number;
  startMonth: string;
  startYear: number;

  endDay: number;
  endMonth: string;
  endYear: number;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private bookingService: BookingService,
    private listingService: ListingService


  ) { 
    this.listingId = window.localStorage.getItem("listingId");

    this.userId = window.localStorage.getItem("userid");
  }

  ngOnInit() {
    this.listingService.getById(this.listingId).then(res=>{
      this.listings = res;
      console.log(this.listings);
    }).catch(err => {console.log(err)})
  }

  navToTrips(){
    this.dateFrom = this.startMonth + "/" + this.startDay + "/" + this.startYear;
    this.dateTo = this.endMonth + "/" + this.endDay + "/" + this.endYear;

    this.newBooking = {
      listingID: this.listingId,
      userID: this.userId,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    }

    console.log(this.newBooking);

    this.bookingService.register(this.newBooking).then(res=>{
      this.booking = res;
      this.navCtrl.navigateForward('trips', {
        queryParams: {
          booking: res
        }
      });
    }).catch(err => {
      this.presentAlert(err);
    });
    
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

}
