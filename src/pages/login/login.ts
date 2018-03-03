import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from '@angular/http';
import {AlertController} from 'ionic-angular';

import {HomePagePage} from '../home-page/home-page';

@Component({selector: 'page-login', templateUrl: 'login.html'})
export class LoginPage {
  account : {
    username: string;
    password: string;
  } = {
    username: "",
    password: ""
  };
  response : any;
  constructor(public navCtrl : NavController, public http : Http, public Alert : AlertController) {}

  goToHomePage() {
    if(this.account.password=="" || this.account.username==""){
      let alert =this.Alert.create({title: 'Error', subTitle: 'Fields must be filled', buttons: ['OK']});
      alert.present();
    }else{
      this
        .http
        .get('http://localhost:8081/GZone/Login.php?username=' + this.account.username)
        .subscribe((response) => {
          var res = response.json();
          if(this.account.username == res[0].user_name && this.account.password == res[0].password){
            let alert = this.Alert.create({title: 'Success', subTitle: 'Login Successful', buttons: ['OK']});
            alert.present();
            localStorage.setItem('Auth_Token', res[0].user_name);
            localStorage.setItem('Agent_ID', res[0].agentID);
            this.navCtrl.push(HomePagePage);
          }else{
            let alert = this.Alert.create({title: 'Error', subTitle: 'Login Failed', buttons: ['OK']});
            alert.present();
          }
        }, error => {
          console.error(error);
        });

    }
  }
}