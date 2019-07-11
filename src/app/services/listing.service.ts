import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllListings(){
    return new Promise((resolve, reject) => {
      this.httpClient
      .get("http://localhost:5000/api/listing")
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
