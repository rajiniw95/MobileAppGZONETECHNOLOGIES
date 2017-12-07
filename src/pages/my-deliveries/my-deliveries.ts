import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import { OrderPage } from '../order/order';
import { DeliveryPage } from '../delivery/delivery';

@Component({
  selector: 'page-my-deliveries',
  templateUrl: 'my-deliveries.html'
})

export class MyDeliveriesPage {

  userID : string;
  res : any[];
  constructor(public navCtrl: NavController, public http: Http) {
   this.userID= localStorage.getItem('Agent_ID');
    this.http.get('http://localhost:8081/GZone/my-deliveries.php?username='+this.userID).subscribe((data) => {
      this.res = data.json();
    });
  }

  goToDelivery(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage, {
      id : params.orderID
    });
  }

}
