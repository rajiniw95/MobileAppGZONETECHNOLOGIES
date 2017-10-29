import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DeliveryPage } from '../delivery/delivery';

@Component({
  selector: 'page-my-deliveries',
  templateUrl: 'my-deliveries.html'
})
export class MyDeliveriesPage {

  constructor(public navCtrl: NavController) {
  }

  goToDelivery(params){
    if (!params) params = {};
    this.navCtrl.push(DeliveryPage);
  }

}
