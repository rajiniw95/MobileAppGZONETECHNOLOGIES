import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OrderPage } from '../order/order';
import { Http } from '@angular/http';

@Component({
  selector: 'page-pending-orders',
  templateUrl: 'pending-orders.html'
})
export class PendingOrdersPage {
  user : string;
  res : any[];
  constructor(public navCtrl: NavController, public http: Http) {
   this.user= localStorage.getItem('Auth_Token');
    this.http.get('http://localhost/GZone/pending-order.php?username='+this.user).subscribe(data => {
      this.res = data.json();
      console.log(this.res);
    });
  }

  goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage);
  }

}
