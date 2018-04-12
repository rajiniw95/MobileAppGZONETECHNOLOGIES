import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import { PreviousClaimsPage } from '../previous-claims/previous-claims';

/**
 * Generated class for the SubmitClaimNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submit-claim-name',
  templateUrl: 'submit-claim-name.html',
})
export class SubmitClaimNamePage {

  account : 
  {
    custname: string;
  } = {
    custname: "",
  };

  response : any;
  constructor(public navCtrl : NavController, public http : Http, public Alert : AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitClaimNamePage');
  }

  /**create function for to go to page which shows the previous claims of customer*/
  goToPreviousClaims(params){

  if(this.account.custname=="")
  {
      let alert =this.Alert.create({title: 'Error', subTitle: 'Please Enter Customer Name', buttons: ['OK']});
      alert.present();
    }
    else 
    {
      this
        .http
        .get('http://localhost:8081/GZone/w_getcustname.php?custname=' + this.account.custname)
        .subscribe((response) => {
          var res = response.json();

          if(this.account.custname == res[0]. customer_name)
          {
            localStorage.setItem('Auth_Token', res[0].customer_name);
            localStorage.setItem('customer_id', res[0].customer_id);
            this.navCtrl.push(PreviousClaimsPage);
          }
          else
          {
            let alert = this.Alert.create({title: 'Error', subTitle: 'Incorrect Customer Name. Please Re-enter!', buttons: ['OK']});
            alert.present();
          }
        }, error => {
          console.error(error);
        });

    }
    

}
}
