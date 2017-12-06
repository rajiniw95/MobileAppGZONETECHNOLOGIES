import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-pending-orders',
  templateUrl: 'pending-orders.html'
})
export class PendingOrdersPage {
  user : string;
  res : any[];
  constructor(public navCtrl: NavController, public http: Http) {
   this.user= localStorage.getItem('Auth_Token');
    this.http.get('http://localhost:8081/GZone/pending-order.php?username='+this.user).subscribe(data => {
      this.res = data.json();
    });
  }

  goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage, {
      id : params.user_name
    });
  }

}
