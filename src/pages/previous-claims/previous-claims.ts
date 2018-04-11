import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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

  customer_id : string;
  res : any[];

  constructor(public navCtrl : NavController, public http : Http) {
   this.customer_id= localStorage.getItem('customer_id');
    this.http.get('http://localhost:8081/GZone/w_getpreviousclaims.php?customer_id='+this.customer_id).subscribe((data) => {
      this.res = data.json();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousClaimsPage');
  }

  

  /**create function for to go to page which shows the list of orders of customer*/
  goToWarrantyOrderList(params){
    if (!params) params = {};
    this.navCtrl.push(WarrantyOrderListPage);}


}
