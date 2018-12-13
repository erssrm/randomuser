import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userLists = [];
  initialPage: number = 1;
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.getUser(this.initialPage);
    
  }
  getUser(pageNumber) {
    if(pageNumber == 1) {
      this.apiProvider.getRandomUser(pageNumber).subscribe(data => this.userLists = data.results);
    } else {
      this.apiProvider.getRandomUser(pageNumber).subscribe((data) => {
        if(data.results.length){
          data.results.forEach(element => {
           this.userLists.push(element);
          });
        }
      });
    }
    
  }
  doInfinite(event) {
    console.log("jhhgjhgjhhhj")
   this.initialPage = this.initialPage + 1;
    this.getUser(this.initialPage);
    console.log("currentPage==>", this.initialPage, "userLists===>", this.userLists)
  }



}
