import { Component } from '@angular/core';
import {IonicPage,  NavController, NavParams , ViewController } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the ModalPageUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-page-user',
  templateUrl: 'modal-page-user.html',
})
export class ModalPageUserPage {
  map: any;
  userInfo:any;
  registerDate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
    this.getData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  public closeModal(){
    this.viewCtrl.dismiss();
}



public getData () {
  this.userInfo = this.navParams.data;
  this.registerDate = moment(this.userInfo.registered.date, "YYYYMMDD").fromNow();
}

}
