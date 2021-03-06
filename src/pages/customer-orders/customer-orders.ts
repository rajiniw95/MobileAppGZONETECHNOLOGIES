import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import {AlertController} from 'ionic-angular';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-delivery',
  templateUrl: 'customer-orders.html'
})
export class CustomerOrder {
  userID : string;
  res : any[];
  public orderId;
  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams) {
    this.orderId = this.navparams.get("id");
   this.userID= localStorage.getItem('Agent_ID');
    this.http.get('http://localhost:8081/GZone/customer-orders.php?username='+this.userID).subscribe((data) => {
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

  updateDelivery(order){
    var status = "delivered";
    
    this.http.post('http://localhost:8081/GZone/update-status.php?id='+order.orderID+'&status='+status,"").subscribe((data) => {
      console.log(data);
      for(var i=0; i < this.res.length; i++){
        if(this.res[i].orderID == order.orderID){
          this.res.splice(i, 1);
        }
      }

      //this.res = data.json();
    });
  }

}
    

