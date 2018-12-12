import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  randomUsers: Observable<any>;
  userLists: any;
  title: string;
  myHero: string;
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    this.randomUsers = this.apiProvider.getRandomUser();    
  }

  ngOnInit() {
    // Let's navigate from TabsPage to Page1
 }



}
