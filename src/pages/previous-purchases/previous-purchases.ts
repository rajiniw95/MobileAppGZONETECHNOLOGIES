import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-previous-purchases',
  templateUrl: 'previous-purchases.html'
})

export class PreviousPurchasesPage {
  userID : string;
  res : any[];
  constructor(public navCtrl: NavController, public http: Http) {
   this.userID= localStorage.getItem('Agent_ID');
    this.http.get('http://localhost:8081/GZone/previous-purchases.php?username='+this.userID).subscribe((data) => {
      console.log(data);
      this.res = data.json();
    });
  }

  goToOrder(params){
    if (!params) params = {};
    this.navCtrl.push(OrderPage, {
      id : params.orderID
    });
  }
  deletePurchases(params){
    this.userID= localStorage.getItem('Agent_ID');
    this.http.get('http://localhost:8081/GZone/delete.php?username='+this.userID).subscribe((data) => {
      console.log(data);
      this.res = data.json();
    });

  }

}
