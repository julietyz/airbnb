/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
} */

import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // This should be type of user to make life a whole lot easier(use listings model as a guide):
  users: Array<User>;
  loggedInUser: User;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        username: 'john@mail.com',
        password: '123'
      },
      {
        firstName: 'Samantha',
        lastName: 'Right',
        username: 'sam@mail.com',
        password: '123'
      },
      {
        firstName: 'Julia',
        lastName: 'Richards',
        username: 'julia@mail.com',
        password: '123'
      },
    ];
  }

  public logIn(Authuser: any) { // This should be type user

    return new Promise((resolve, reject) => {

      // Please note that this will call the API noce we have created it - But for now:
      const user: any = this.users.filter(dbUser => {
        return dbUser.username === Authuser.username;
      });

      // This logic will be on the backend we will just return success or erroe HTTP response - But for now:
      if (user.length) {
        if (Authuser.password === user[0].password) {
          this.setLoggedInUser(user[0]);
          resolve(user[0]);
        } else {
          reject(new Error('Incorrect password'));
        }
      } else {
        reject(new Error("User doesn't exist"));
      }

    });

  }

  setLoggedInUser(user: any) { // This should be type user
    this.loggedInUser = user;
  }

  getLoggedInUser(): any { // This should be type user
    return this.loggedInUser;
  }

}
