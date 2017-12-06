import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';

import { DeliveryPage } from '../delivery/delivery';

@Component({
  selector: 'page-my-deliveries',
  templateUrl: 'my-deliveries.html'
})

export class MyDeliveriesPage {

  user : string;
  res : any[];
  constructor(public navCtrl: NavController, public http: Http) {
   this.user= localStorage.getItem('Auth_Token');
    this.http.get('http://localhost:8081/GZone/deliverylist.php?username='+this.user).subscribe(data => {
      this.res = data.json();
      console.log(this.res);
    });
  }

  goToDelivery(params){
    if (!params) params = {};
    this.navCtrl.push(DeliveryPage, {
      id : params
    });
  }

}
