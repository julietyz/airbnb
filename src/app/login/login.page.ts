import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { BookingService } from '../services/booking.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  public users: any;
  public listings: any;
  public bookings: any;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private alertCtrl: AlertController,
    private listingService: ListingService,
    private bookingService: BookingService

  ) {
  }

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }

  ngOnInit() {
  }

  login() {
    // let authUser = new User(this.eamil,this.password); -- I would do this (add user model)
    const authUser = {
      email: this.email,
      password: this.password
    }
    this.userService.logIn(authUser).then(user => {
      this.navCtrl.navigateForward('profile', user);
    }).catch(err => {
      this.presentAlert(err);
    });
  }

  register() {
    alert("Feature coming soon!")
    // This should navigate to the register page:
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

  getUsers(){
    this.userService.getAllUsers().then(res=>{
      this.users = res;
    }).catch(err => {console.log(err)})
  }

  getListings(){
    this.listingService.getAllListings().then(res=>{
      this.listings = res;
    }).catch(err => {console.log(err)})
  }

  getBookings(){
    this.bookingService.getAllBookings().then(res=>{
      this.bookings = res;
    }).catch(err => {console.log(err)})
  }

}
