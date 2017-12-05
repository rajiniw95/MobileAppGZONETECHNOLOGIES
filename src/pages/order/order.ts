import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/Http";

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  user : string;
  res : any;
  constructor(public navCtrl: NavController, public http: Http) {
    this.user= localStorage.getItem('Auth_Token');
    this.http.get('http://localhost/GZone/order.php?username='+this.user).subscribe(data => {
      this.res = data.json();
      console.log(this.res);
    });
  }
  
}
