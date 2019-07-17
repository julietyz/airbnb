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
          localStorage.setItem('firstName', response.firstName);
          localStorage.setItem('cellPhone', response.cellPhone);
          localStorage.setItem('email', response.email);
          resolve(response);
        },
        (err) => {
          console.log(err.error.message);
          reject(err);
        }
      );

    });
  }
}
