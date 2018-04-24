import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, Response} from '@angular/http';

import { SubmitRequestPage } from '../submit-request/submit-request';
import { WithinWarrantyPeriodPage } from '../within-warranty-period/within-warranty-period';

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

  productID : string;
  res : any;
  res_date : any;

  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams) {
    this.productID = this.navparams.get("id");
    localStorage.setItem('product_id', this.productID);
    this.http
      .get('http://localhost:8081/GZone/w_warrantydetails.php?productID=' + this.productID)
      .subscribe((data) => {
        let response = data.json();
        this.res = response[0];
      });
      
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WarrantyDetailsPage');
  }

  
  /**create function for to go to page which shows the warranty details of the particular product*/
  checkWarrantyPeriod(params){
      this.navCtrl.push(SubmitRequestPage);

    }

}