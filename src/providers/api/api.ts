import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  getRandomUser() {
    return  this.http.get('https://randomuser.me/api/?page=3&results=10&seed=abc');
    
  }

}
