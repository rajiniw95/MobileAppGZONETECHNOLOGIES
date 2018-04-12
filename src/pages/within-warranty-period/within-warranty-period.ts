import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubmitRequestPage } from '../submit-request/submit-request';

/**
 * Generated class for the WithinWarrantyPeriodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-within-warranty-period',
  templateUrl: 'within-warranty-period.html',
})
export class WithinWarrantyPeriodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithinWarrantyPeriodPage');
  }

  goToSubmitRequest(params){
    if (!params) params = {};
    this.navCtrl.push(SubmitRequestPage);
  }


}
