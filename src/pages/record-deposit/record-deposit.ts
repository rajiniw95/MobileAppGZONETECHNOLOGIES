import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import {AlertController} from 'ionic-angular';

import { UploadDepositSlipPage } from '../upload-deposit-slip/upload-deposit-slip';

@Component({
  selector: 'page-record-deposit',
  templateUrl: 'record-deposit.html'
})
export class RecordDepositPage {

  amount : string ="null";
  year: string = "null";
  month : string = "null";
  constructor(public navCtrl: NavController, public http: Http, public Alert : AlertController) {
  }

  goToUploadDepositSlip(params){
    if (!params) params = {};
    this.navCtrl.push(UploadDepositSlipPage);
  }



  addDeposit(){
    if(this.amount == "null" || this.year == "null" || this.month == "null"){
      let alert = this.Alert.create({title: 'Error', subTitle: 'All fields must be filled', buttons: ['OK']});
      alert.present();
    }else{
      this.http.post('http://localhost:8081/GZone/recordDeposit.php?amount=' + this.amount.trim() +'&year='+this.year.trim()+'&month='+this.month.trim(),"").subscribe((response) => {
        console.log(response);
        if(response.statusText){
          let alert = this.Alert.create({title: 'Success', subTitle: 'Successfull Added', buttons: ['OK']});
          alert.present();
          this.amount ="null";
          this.year = "null";
          this.month = "null";
        }else{
          let alert = this.Alert.create({title: 'Error', subTitle: 'Error Inserting values', buttons: ['OK']});
          alert.present();
        }
      });

    }

  }

}
