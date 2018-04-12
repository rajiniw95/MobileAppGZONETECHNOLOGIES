import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, Response} from '@angular/http';

/**
 * Generated class for the TrackingStatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracking-status',
  templateUrl: 'tracking-status.html',
})
export class TrackingStatusPage {

  request_id : string;
  res : any;


  constructor(public navCtrl : NavController, public http : Http) {

    this.request_id = localStorage.getItem('request_id');
    this.http
      .get('http://localhost:8081/GZone/w_trackrequestid.php?request_id=' + this.request_id)
      .subscribe((data) => {
        let response = data.json();
        this.res = response[0];
      });
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingStatusPage');
  }

}
