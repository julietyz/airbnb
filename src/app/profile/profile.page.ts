import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // private currentUser: User;
  public firstName: string;

  constructor(
    private navCtrl: NavController,
    private userService: UserService
  ) {

    this.firstName = window.localStorage.getItem('firstName');
    // const currentUser = this.userService.getLoggedInUser();
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
  ngOnInit() {
  }

}
