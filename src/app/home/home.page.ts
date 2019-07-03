import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private alertctl: AlertController,
    private navCtrl: NavController
      ) {}

  pressMe() {
    this.openAlert();
}
navToProfile() {
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
}
