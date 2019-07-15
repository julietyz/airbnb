import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient

  ) { }

  login(authUser){
    return new Promise((resolve, reject) => {
      this.httpClient
      .post("http://localhost:5000/api/auth/login", authUser)
      .subscribe(
        (response) => {
          resolve(response);
        },
        (err) => {
          console.log(err.error.message);
          reject(err);
        }
      )


    });
  }
}
