import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html'
})
export class DeliveryPage {
  user : string;
  res : any;
  items : any;
  deliver : boolean = false;
  public orderId;
  constructor(public navCtrl: NavController, public http: Http, public navparams : NavParams, public Alert : AlertController) {
    this.orderId = this.navparams.get("id");
    this.user= localStorage.getItem('Auth_Token');
    this.http.get('http://localhost:8081/GZone/order.php?id='+this.orderId).subscribe((data) => {
      this.res = data.json();
      console.log(this.res[0]);
      if(this.res[0].status == "pending"){
        this.deliver = true;
      }else{
        this.deliver = false;
      }
      this.http.get('http://localhost:8081/GZone/orderItems.php?id='+this.orderId).subscribe((response) => {
        this.items = response.json();
      });
    });
  }

  Deliver(){
    let alert = this.Alert.create({
      title: 'Confirm purchase',
      message: 'Do you want to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            var d = new Date();
            var date = d.getMonth()+1;
            console.log(date);
            var status = "delivered";
            this.http.get('http://localhost:8081/GZone/updateDelivery.php?id='+this.orderId+'&date='+date+'&status='+status).subscribe((response) => {
              console.log(response);
              this.deliver = false;
            });
          }
        }
      ]
    });
    alert.present();
  }
  
}