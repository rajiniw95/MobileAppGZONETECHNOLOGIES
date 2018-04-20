import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import { OrderPage } from '../order/order';



@Component({
  selector: 'page-personal-orders',
  templateUrl: 'personal-orders.html'
})
export class PersonalOrderPage {
  userID : string;
  res : any[];
  constructor(public navCtrl: NavController, public http: Http) {
   this.userID= localStorage.getItem('Agent_ID');
    this.http.get('http://localhost:8081/GZone/personal-orders.php?username='+this.userID).subscribe((data) => {
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
    });
}
}
