import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WarrantyDetailsPage } from '../warranty-details/warranty-details';

/**
 * Generated class for the ClaimOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claim-order',
  templateUrl: 'claim-order.html',
})
export class ClaimOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimOrderPage');
  }

  

  /**create function for to go to page which shows the warranty details of the particular product*/
  goToWarrantyDetails(params){
    if (!params) params = {};
    this.navCtrl.push(WarrantyDetailsPage);}

}
