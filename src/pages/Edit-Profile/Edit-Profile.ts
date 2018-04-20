import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import {AlertController} from 'ionic-angular';
import {MyProfilePage} from '../my-profile/my-profile';

@Component({
  selector: 'page-delivery',
  templateUrl: 'Edit-Profile.html'
})
export class EditProfile {
 
  user : string;
  res : any;
  name;
  constructor(public navCtrl : NavController, public http : Http) {
    this.user = localStorage.getItem('Auth_Token');
    this.http
      .get('http://localhost:8081/GZone/view-profile.php?username=' + this.user)
      .subscribe((data) => {
        let response = data.json();
        this.res = response[0];
        this.name = this.res.fname + " " +this.res.lname;
      },(error) => {
        console.error(error);
      });
  }

  editProfile(){
    let Agent_Id = localStorage.getItem('Agent_ID');
    this.http.post('http://localhost:8081/GZone/edit-profile.php?agentId='+Agent_Id+'&lname=' + this.res.lname+'&fname='+this.res.fname+'&address='+this.res.address+'&tel_no='+this.res.tel_no,"")
    .subscribe((data) => {
      this.navCtrl.push(MyProfilePage);
    },(error) => {
      console.error(error);
    });
  }
}
