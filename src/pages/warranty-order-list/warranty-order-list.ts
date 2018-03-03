import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClaimOrderPage } from '../claim-order/claim-order';

/**
 * Generated class for the WarrantyOrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-warranty-order-list',
  templateUrl: 'warranty-order-list.html',
})
export class WarrantyOrderListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WarrantyOrderListPage');
  }

  /**create function for to go to page which shows details of order*/
  goToClaimOrder(params){
    if (!params) params = {};
    this.navCtrl.push(ClaimOrderPage);}
}
