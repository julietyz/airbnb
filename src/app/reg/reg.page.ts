import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { User } from '../Models/user';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  users: Array<User> = [];
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(
    private alertctl: AlertController,
    private navCtrl: NavController
  ) { }

  pressMe() {
    this.openAlert();
  }
  navToLogin() {
    this.navCtrl.navigateForward("home");
  }
  createUser() {

    var newUser = new User(24, this.firstName, this.lastName, 5555555, this.email, this.password);
    this.users.push(newUser);
    this.navCtrl.navigateForward("profile");

  }

  async openAlert() {
    const alert = await this.alertctl.create({
      header: 'Login Attempted',
      message: 'You attempted to login but we do not have this feature yet.',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
