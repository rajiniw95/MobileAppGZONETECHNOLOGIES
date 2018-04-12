import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the SubmitRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submit-request',
  templateUrl: 'submit-request.html',
})
export class SubmitRequestPage {

	customer_id : string = "null";
	customer_name : string = "null";
	product_id : any = "null";
  agent_id : string = "null"; 
  telno : string = "null"; 
  quantity : string = "null";  
  comments : string = "null"; 
	res : any;

  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams) {
    this.agent_id = localStorage.getItem('agentId');
  	this.customer_id = localStorage.getItem('customer_id');
  	this.customer_name = localStorage.getItem('Auth_Token');

	this.product_id = localStorage.getItem('product_id'); 

	this.http
      .get('http://localhost:8081/GZone/w_warrantydetails.php?productID=' + this.product_id)
      .subscribe((data) => {
        let response = data.json();
        this.res = response[0];
      }); 	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitRequestPage');
  }

  /**ccheck whether the item falls within the warranty period*/
  SubmitRequest(params){}

}
