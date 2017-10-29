import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyOrdersPage } from '../my-orders/my-orders';
import { MyDeliveriesPage } from '../my-deliveries/my-deliveries';
import { MyPaymentsPage } from '../my-payments/my-payments';
import { MyProfilePage } from '../my-profile/my-profile';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class HomePagePage {

  constructor(public navCtrl: NavController) {
  }

  goToMyOrders(params){
    if (!params) params = {};
    this.navCtrl.push(MyOrdersPage);
  }

  goToMyDeliveries(params){
    if (!params) params = {};
    this.navCtrl.push(MyDeliveriesPage);
  }

  goToMyPayments(params){
    if (!params) params = {};
    this.navCtrl.push(MyPaymentsPage);
  }

  goToMyProfile(params){
    if (!params) params = {};
    this.navCtrl.push(MyProfilePage);
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

}
