import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import {AlertController} from 'ionic-angular';

import { HomePagePage } from '../home-page/home-page';

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
	product_id : string = "null";
  agent_id : string = "null"; 
  telno : string = "null"; 
  quantity : string = "null";  
  comments : string = "null"; 
	res : any;
  

  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams, public Alert : AlertController) {
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
  SubmitRequest(params){
    if( this.telno == "null" || this.quantity == "null" || this.comments == "null"){
      let alert = this.Alert.create({title: 'Error', subTitle: 'All fields must be filled', buttons: ['OK']});
      alert.present();
    }
    else {
      let Agent_Id = localStorage.getItem('Agent_ID');
      let customer_id = localStorage.getItem('customer_id');
      let customer_name = localStorage.getItem('Auth_Token');
      let product_id = localStorage.getItem('product_id'); 

      


      this.http.post('http://localhost:8081/GZone/w_submitrequest.php?customer_id='+this.customer_id+'&agent_id='+this.agent_id+'&comments='+this.comments+'&customer_name='+this.customer_name+'&telno='+this.telno+'&qty='+this.quantity+'&product_id='+this.product_id,"").subscribe((response) => {
        console.log(response);
        if(response.statusText){
          let alert = this.Alert.create({title: 'Success', subTitle: 'Request Submitted for Review', buttons: ['OK']});
          alert.present();
          this.quantity ="null";
          this.telno = "null";
          this.comments = "null";
          
        }else{
          let alert = this.Alert.create({title: 'Error', subTitle: 'Error Inserting values', buttons: ['OK']});
          alert.present();
        }
      });

      this.http.post('https://senda-mobile-app-senuraa.c9users.io/mail/index.php?agentId=' + Agent_Id,"").subscribe((response) => {
        console.log(response);
      });

      this.navCtrl.push(HomePagePage);
    }
  }

}
