import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';

import { TrackingStatusListPage } from '../tracking-status-list/tracking-status-list';

/**
 * Generated class for the TrackListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-list',
  templateUrl: 'track-list.html',
})
export class TrackListPage {

  agent_id : string;
  res : any[];

  constructor(public navCtrl: NavController, public http: Http) {
    this.agent_id= localStorage.getItem('Agent_ID');
    this.http.get('http://localhost:8081/GZone/w_getagenttracklist.php?agent_id='+this.agent_id).subscribe((data) => {
      this.res = data.json();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackListPage');
  }

  goToTrackingStatus(params){
    if (!params) params = {};
    localStorage.setItem('request_id', this.res[0].request_id);
    this.navCtrl.push(TrackingStatusListPage, {request_id : params.request_id});}

}

