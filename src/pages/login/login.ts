import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

import { HomePagePage } from '../home-page/home-page';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: {
    username: string;
    password: string;
  } = { username: "", password: "" };
  response: any;
  constructor(public navCtrl: NavController, public http: Http, public Alert: AlertController) {
  }

  goToHomePage(params) {
    this.http.get('http://localhost/myapp/Login.php?username=' + this.account.username).subscribe((res) => {
      var d = res.toString();
      if (d.indexOf(this.account.username) != -1) {
        if (d.indexOf(this.account.password) != -1) {
          localStorage.setItem('auth_token', this.account.username);
          console.log('Login Success')
          this.navCtrl.push(HomePagePage);
        } else {
          console.log('Login failed')
          let alert = this.Alert.create({
            title: 'Error',
            subTitle: 'Password Incorrect',
            buttons: ['OK']
          });
          alert.present();
        }
      } else {
        let alert = this.Alert.create({
          title: 'Error',
          subTitle: 'Username Incorrect',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }


  // logForm(res){
  //   console.log(res + " "+ res.Password);
  //   var d = res.toString();
  //   if(d.indexOf('Response with status: 200 OK') != -1){
  //     console.log('We are in mf')
  //     this.navCtrl.push(HomePagePage);
  //   }
  // }
}
