import { Component,ViewChild, ElementRef } from '@angular/core';
import {IonicPage,  NavController, NavParams , ViewController } from 'ionic-angular';
import { google } from 'google-maps';

/**
 * Generated class for the ModalPageUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-modal-page-user',
  templateUrl: 'modal-page-user.html',
})
export class ModalPageUserPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  userInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  public closeModal(){
    this.viewCtrl.dismiss();
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ModalPage');
  this.userInfo = this.navParams.data;
  console.log("userINfo============>", this.userInfo);
  this.loadMap();
}
loadMap(){
 
  // let latLng = new google.maps.LatLng(-34.9290, 138.6010);

  // let mapOptions = {
  //   center: latLng,
  //   zoom: 15,
  //   mapTypeId: google.maps.MapTypeId.ROADMAP
  // }

  // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

 

}

}
