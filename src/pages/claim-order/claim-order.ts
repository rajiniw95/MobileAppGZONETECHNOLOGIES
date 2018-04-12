import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

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

  res : any;
  res_date : any[];
  items : any;
  public orderId;

  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams) {

    this.orderId = this.navparams.get("id");

    localStorage.setItem('order_id', this.orderId);

    this.http.get('http://localhost:8081/GZone/w_claimorder.php?id='+this.orderId).subscribe((data) => {
      this.res = data.json();
      this.http.get('http://localhost:8081/GZone/w_claimorderitems.php?id='+this.orderId).subscribe((response) => {
        this.items = response.json();
      });
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimOrderPage');
  }

  

  /**create function for to go to page which shows the warranty details of the particular product*/
  goToWarrantyDetails(params){
    if (!params) params = {};

    this.navCtrl.push(WarrantyDetailsPage,  {
      id : params.productID
    });
    }

}
