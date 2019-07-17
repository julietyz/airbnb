import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

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
    private userService: UserService

  ) { }

  pressMe() {
    this.openAlert();
  }
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

    this.userService.create(newUser).then(res=>{
      this.user = res;
      this.navCtrl.navigateForward('profile', {
        queryParams: {
          user: res
        }
      });
    }).catch(err => {console.log(err)})


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
