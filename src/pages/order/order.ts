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
  items : any;
  public orderId;
  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams) {
    this.orderId = this.navparams.get("id");
    this.user= localStorage.getItem('Auth_Token');
    this.http.get('http://localhost:8100/GZone/order.php?id='+this.orderId).subscribe((data) => {
      this.res = data.json();
      this.http.get('http://localhost:8081/GZone/orderItems.php?id='+this.orderId).subscribe((response) => {
        this.items = response.json();
      });
    });
  }
  
}
