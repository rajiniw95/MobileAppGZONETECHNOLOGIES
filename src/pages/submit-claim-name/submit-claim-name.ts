import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PreviousClaimsPage } from '../previous-claims/previous-claims';

/**
 * Generated class for the SubmitClaimNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submit-claim-name',
  templateUrl: 'submit-claim-name.html',
})
export class SubmitClaimNamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitClaimNamePage');
  }

  /**create function for to go to page which shows the previous claims of customer*/
  goToPreviousClaims(params){
    if (!params) params = {};
    this.navCtrl.push(PreviousClaimsPage);}

}