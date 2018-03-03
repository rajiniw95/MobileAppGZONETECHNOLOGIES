import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**import pages*/
import { SubmitClaimNamePage } from '../submit-claim-name/submit-claim-name';
import { TrackClaimPage } from '../track-claim/track-claim';

/**
 * Generated class for the WarrantyHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-warranty-home',
  templateUrl: 'warranty-home.html',
})
export class WarrantyHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WarrantyHomePage');
  }

  /**create function for submit claim button-go to submit-claim page*/
  goToSubmitClaim(params){
    if (!params) params = {};
    this.navCtrl.push(SubmitClaimNamePage);
  }

  /**create function for track claim button-go to track-claim page*/
  goToTrackClaim(params){
    if (!params) params = {};
    this.navCtrl.push(TrackClaimPage);
  }

}





