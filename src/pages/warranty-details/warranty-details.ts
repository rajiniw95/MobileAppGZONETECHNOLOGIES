import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubmitRequestPage } from '../submit-request/submit-request';

/**
 * Generated class for the WarrantyDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-warranty-details',
  templateUrl: 'warranty-details.html',
})
export class WarrantyDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WarrantyDetailsPage');
  }

  
  /**create function for to go to page which shows the warranty details of the particular product*/
  checkWarrantyPeriod(params){
    if (!params) params = {};
    this.navCtrl.push(SubmitRequestPage);}

}
