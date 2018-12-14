import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { google } from 'google-maps';

/**
 * Generated class for the ModalpadeMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;
@IonicPage()
@Component({
  selector: 'page-modalpade-map',
  templateUrl: 'modalpade-map.html',
})
export class ModalpadeMapPage {
  map: any;
  userInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalpadeMapPage');
    this.loadMap();
  }
  public closeModal() {
    this.viewCtrl.dismiss();
  }

  loadMap() {
    var myLatLng = { lat: parseFloat(this.userInfo.location.coordinates.latitude), lng: parseFloat(this.userInfo.location.coordinates.longitude) };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });



  }

  public getData() {
    this.userInfo = this.navParams.data;
  }

}
