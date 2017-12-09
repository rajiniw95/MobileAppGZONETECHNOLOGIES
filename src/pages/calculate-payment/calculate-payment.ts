import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'page-calculate-payment',
  templateUrl: 'calculate-payment.html'
})

export class CalculatePaymentPage {
  res :any;
  respon1 : any;
  total : number;
  commision: number;
  deposit : number;

  constructor(public navCtrl: NavController, public http: Http) {
    var d = new Date();
    var date = d.getMonth()+1;
    let userID = localStorage.getItem('Agent_ID');
    this.http.get('http://localhost:8081/GZone/calculateItemData.php?agent_Id='+userID+'&date='+date).subscribe((response) => {
    this.respon1 = response.json();
    this.total = this.respon1[0].sum;
    this.commision =  this.total * 0.07;
    this.deposit = this.total - this.commision;
    });
  }

  totalAmount(){
    let userID = localStorage.getItem('Agent_ID');
    this.http.get('http://localhost:8081/GZone/updateAmount.php?agent_Id='+userID+'&total='+this.total).subscribe((response) => {
    console.log(response);
      });
  }
  
}
