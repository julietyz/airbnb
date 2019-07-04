import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { User } from '../Models/user';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  providers: Array<User> = [];
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  constructor(
    private alertctl: AlertController,
    private navCtrl: NavController
  ) { }

  pressMe() {
    this.openAlert();
  }
  navToLogin() {
    this.navCtrl.navigateForward("login");
  }
  createUser() {

    var newUser = new User(this.firstName, this.lastName, this.email, this.phone);
    this.providers.push(newUser);
    this.navToLogin();

  }

  async openAlert() {
    const alert = await this.alertctl.create({
      header: 'Login Attempted',
      message: 'You attempted to login but we do not have this feature yet.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
