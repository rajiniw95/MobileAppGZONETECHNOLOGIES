import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-pending-orders',
  templateUrl: 'pending-orders.html'
})
export class PendingOrdersPage {

  headers = new Headers();
  orders : any;
  username : string = localStorage.getItem('auth_token');

  constructor(public navCtrl: NavController, public http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.http.get('http://localhost/myapp/pending-order.php?username='+ this.username).subscribe((res) => {
        this.orders = res.json();
    });
  }

  goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage);
  }

}
