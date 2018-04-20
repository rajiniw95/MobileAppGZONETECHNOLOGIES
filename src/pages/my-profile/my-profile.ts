import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http, Headers, Response} from '@angular/http';
import {EditProfile} from '../Edit-profile/Edit-profile';

@Component(
  {
    selector: 'page-my-profile', 
    templateUrl: 'my-profile.html'
  })
export class MyProfilePage {
  user : string;
  res : any;
  addver;
  array = [];
  constructor(public navCtrl : NavController, public http : Http) {
    this.addver = localStorage.getItem('Advertiesements');
    this.array = this.addver.split(',');
    this.user = localStorage.getItem('Auth_Token');
    this.http
      .get('http://localhost:8081/GZone/view-profile.php?username=' + this.user)
      .subscribe((data) => {
        let response = data.json();
        this.res = response[0];
      },(error) => {
        console.error(error);
      });
  }
  
  Edit(){
    this.navCtrl.push(EditProfile);
    }
}


