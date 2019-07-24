import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { BookingService } from '../services/booking.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;
  id: string;

  public users: any;
  public listings: any;
  public bookings: any;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private alertCtrl: AlertController,
    private listingService: ListingService,
    private bookingService: BookingService,
    private authService: AuthService

  ) {
    //console.log("in home");
  }
  
  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
  navToReg() {
    this.navCtrl.navigateForward("reg");
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

  getUserById(){
    this.userService.getById(this.id).then(res=>{
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

loginBackend(){
  const authUser = {
    email: this.email, 
    password: this.password
  };

    this.authService.login(authUser).then(res=>{

      const testId = localStorage.getItem("userid");
      console.log(testId);

      this.navCtrl.navigateForward('profile', {
        queryParams: {
          user: res
        }
      });

    }).catch(err => {
      this.presentAlert(err);
  });
}
}
