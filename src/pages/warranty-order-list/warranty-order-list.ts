import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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

  customer_id : string;
  res : any[];

  constructor(public navCtrl : NavController, public http : Http) {
   this.customer_id= localStorage.getItem('customer_id');
    this.http.get('http://localhost:8081/GZone/w_getorderlist.php?customer_id='+this.customer_id).subscribe((data) => {
      this.res = data.json();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WarrantyOrderListPage');
  }

  /**create function for to go to page which shows details of order*/
  goToClaimOrder(params){
    if (!params) params = {};
    this.navCtrl.push(ClaimOrderPage , {id : params.orderID});
    }
}
