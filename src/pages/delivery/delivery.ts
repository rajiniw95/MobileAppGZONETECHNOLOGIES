import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html'
})
export class DeliveryPage {
  customerName : string;
  tel : string;
  user : string;
  orderId : string;
  total : string;

  res : any;
  public deliveryId;
  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams) {
    this.deliveryId = this.navparams.get("id");
    this.user= localStorage.getItem('Auth_Token');
    this.http.get('http://localhost/GZone/delivery.php?id='+this.deliveryId).subscribe(data => {
      this.res = data.json();
      console.log(this.res);
    });
  }
  
}