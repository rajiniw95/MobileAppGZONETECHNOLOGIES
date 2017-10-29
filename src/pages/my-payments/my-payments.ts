import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecordDepositPage } from '../record-deposit/record-deposit';
import { CalculatePaymentPage } from '../calculate-payment/calculate-payment';

@Component({
  selector: 'page-my-payments',
  templateUrl: 'my-payments.html'
})
export class MyPaymentsPage {

  constructor(public navCtrl: NavController) {
  }

  goToRecordDeposit(params){
    if (!params) params = {};
    this.navCtrl.push(RecordDepositPage);
  }

  goToCalculatePayment(params){
    if (!params) params = {};
    this.navCtrl.push(CalculatePaymentPage);
  }

}
