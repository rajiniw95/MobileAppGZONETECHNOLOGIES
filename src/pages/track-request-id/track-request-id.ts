import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import { TrackingStatusPage } from '../tracking-status/tracking-status';

/**
 * Generated class for the TrackRequestIdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-request-id',
  templateUrl: 'track-request-id.html',
})
export class TrackRequestIdPage {

  account : 
  {
    request_id: string;
  } = {
    request_id: "",
  };

  response : any;

  constructor(public navCtrl : NavController, public http : Http, public Alert : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackRequestIdPage');
  }

  goToTrackingStatus(params){

  if(this.account.request_id=="")
  {
      let alert =this.Alert.create({title: 'Error', subTitle: 'Please Enter Warranty Request ID', buttons: ['OK']});
      alert.present();
    }
    else 
    {
      this
        .http
        .get('http://localhost:8081/GZone/w_trackrequestid.php?request_id=' + this.account.request_id)
        .subscribe((response) => {
          var res = response.json();

          if(this.account.request_id == res[0].request_id)
          {
            localStorage.setItem('request_id', res[0].request_id);
            this.navCtrl.push(TrackingStatusPage);
          }
          else
          {
            let alert = this.Alert.create({title: 'Error', subTitle: 'Incorrect Warranty Request ID. Please Re-enter!', buttons: ['OK']});
            alert.present();
          }
        }, error => {
          console.error(error);
        });

    }


}
}
