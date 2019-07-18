import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cellPhone: number;
  public user: any;

  constructor(
    private alertctl: AlertController,
    private navCtrl: NavController,
    private authService: AuthService,
    private userService: UserService

  ) { }

  navToLogin() {
    this.navCtrl.navigateForward("home");
  }
  createUser() {

    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      cellPhone: this.cellPhone,
      role: "user"
    }

    this.authService.register(newUser).then(res=>{
      this.user = res;
      this.navCtrl.navigateForward('profile', {
        queryParams: {
          user: res
        }
      });
    }).catch(err => {
      this.presentAlert(err);
    });


  } 

  async presentAlert(err) {
    const alert = await this.alertctl.create({
      header: 'Alert',
      subHeader: 'Failed to register',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
