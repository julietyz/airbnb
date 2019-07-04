import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private alertCtrl: AlertController,
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

}
