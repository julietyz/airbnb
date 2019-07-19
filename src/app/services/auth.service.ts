import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient

  ) { }

  login(authUser){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .post("http://localhost:5000/api/auth/login", authUser, {headers})
      .subscribe((response: any) => {
          console.log(response.id);
          localStorage.setItem('userid', response.id);
          resolve(response);
        },
        (err) => {
          console.log(err.error.message);
          console.log(err.error);
          reject(err.error);
        }
      );

    });
  }

  register(newUser){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();

      this.httpClient
      .post("http://localhost:5000/api/auth/register", newUser, {headers})
      .subscribe((response: any) => {
          localStorage.setItem('userid', response.insertId);
/*           localStorage.setItem('firstName', newUser.firstName);
          localStorage.setItem('cellPhone', newUser.cellPhone);
          localStorage.setItem('email', newUser.email); */
          resolve(response);
        },

        (err) => {
          console.log(err.error.message);
          console.log(err.error);
          reject(err.error);
        }
      );

    });
  }
}
