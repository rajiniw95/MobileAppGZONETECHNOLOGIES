import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrackRequestIdPage } from '../track-request-id/track-request-id';
import { TrackListPage } from '../track-list/track-list';


/**
 * Generated class for the TrackClaimPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-claim',
  templateUrl: 'track-claim.html',
})
export class TrackClaimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackClaimPage');
  }

  
  goToTrackRequestID(params){
    if (!params) params = {};
    this.navCtrl.push(TrackRequestIdPage);}

  goToTrackingList(params){
    if (!params) params = {};
    this.navCtrl.push(TrackListPage);}

}
