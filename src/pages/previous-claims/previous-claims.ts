import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WarrantyOrderListPage } from '../warranty-order-list/warranty-order-list';

/**
 * Generated class for the PreviousClaimsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previous-claims',
  templateUrl: 'previous-claims.html',
})
export class PreviousClaimsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousClaimsPage');
  }

  

  /**create function for to go to page which shows the list of orders of customer*/
  goToWarrantyOrderList(params){
    if (!params) params = {};
    this.navCtrl.push(WarrantyOrderListPage);}


}
