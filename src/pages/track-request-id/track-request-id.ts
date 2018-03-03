import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrackingStatusPage } from '../tracking-status/tracking-status';

/**
 * Generated class for the TrackRequestIdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-request-id',
  templateUrl: 'track-request-id.html',
})
export class TrackRequestIdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackRequestIdPage');
  }

 

  /**create function for to go to page which shows the previous claims of customer*/
  goToTrackingStatus(params){
    if (!params) params = {};
    this.navCtrl.push(TrackingStatusPage);}

}
