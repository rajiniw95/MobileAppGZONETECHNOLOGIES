import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  user : string;
  res : any;
  public orderId;
  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams) {
    this.orderId = this.navparams.get("id");
    this.user= localStorage.getItem('Auth_Token');
    this.http.get('http://localhost:8081/GZone/order.php?id='+this.orderId).subscribe((data) => {
      this.res = data.json();
      console.log(this.res);
    });
  }
  
}
