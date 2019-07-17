import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
//import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // private currentUser: User;
  public id: string;
  public firstName: string;
  public cellPhone: string;
  public email: string;
  

  constructor(
    private navCtrl: NavController,
    private userService: UserService
  ) {
  
    this.id = window.localStorage.getItem('userid');
    this.firstName = window.localStorage.getItem('firstName');
    this.cellPhone = window.localStorage.getItem('cellPhone');
    this.email = window.localStorage.getItem('email');
    // const currentUser = this.userService.getLoggedInUser();
  }

  getUserById(){
    
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
