webpackJsonp([13],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_home_page__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, http, Alert) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.Alert = Alert;
        this.account = {
            username: "",
            password: ""
        };
    }
    LoginPage.prototype.goToHomePage = function () {
        var _this = this;
        if (this.account.password == "" || this.account.username == "") {
            var alert_1 = this.Alert.create({ title: 'Error', subTitle: 'Fields must be filled', buttons: ['OK'] });
            alert_1.present();
        }
        else {
            this
                .http
                .get('http://localhost:8081/GZone/Login.php?username=' + this.account.username)
                .subscribe(function (response) {
                var res = response.json();
                if (res.length != 0) {
                    if (_this.account.username == res[0].user_name && _this.account.password == res[0].password) {
                        var alert_2 = _this.Alert.create({ title: 'Success', subTitle: 'Login Successful', buttons: ['OK'] });
                        alert_2.present();
                        if (res[0] && res[0].user_name) {
                            localStorage.setItem('Auth_Token', res[0].user_name);
                            localStorage.setItem('Agent_ID', res[0].agentID);
                        }
                        _this.http
                            .get('http://localhost:8081/GZone/show-adds.php')
                            .subscribe(function (response) {
                            var add = response.json();
                            var paths;
                            for (var i = 0; i < add.length; i++) {
                                if (i == 0) {
                                    paths = add[i].path;
                                }
                                else {
                                    paths = paths + "," + add[i].path;
                                }
                            }
                            localStorage.setItem('Advertiesements', paths);
                        }, function (error) {
                            console.error(error);
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_page_home_page__["a" /* HomePagePage */]);
                    }
                    else {
                        var alert_3 = _this.Alert.create({ title: 'Error', subTitle: 'Login Failed', buttons: ['OK'] });
                        alert_3.present();
                    }
                }
                else {
                    var alert_4 = _this.Alert.create({ title: 'Error', subTitle: 'Login Failed', buttons: ['OK'] });
                    alert_4.present();
                }
            }, function (error) {
                console.error(error);
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'page-login',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <form (ngSubmit)="logForm()" id="login-form1" method="post" action="Login.php" onsubmit="">\n\n    <div>\n\n      <img src="assets/img/2ktNuGpvTE2ep0GsYvZ3_12314128_1674935919443516_3250136307729642455_n.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </div>\n\n    <div class="spacer" style="width:300px;height:26px;" id="login-spacer3"></div>\n\n    <ion-list id="login-list2">\n\n      <ion-item id="login-input1">\n\n      <i class="icon ion-home"></i>\n\n        <ion-label>\n\n          Username\n\n        </ion-label>\n\n        <ion-input type="text" name="username" [(ngModel)]="account.username" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="login-input2">\n\n        <ion-label>\n\n          Password\n\n        </ion-label>\n\n        <ion-icon name="logo-yen"></ion-icon>\n\n        <ion-input type="password" name="password" [(ngModel)]="account.password" placeholder=""></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n<button id="submit" ion-button color="stable" block on-click="goToHomePage()">\n\n    Log in\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\login\login.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_deposit_record_deposit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculate_payment_calculate_payment__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyPaymentsPage = (function () {
    function MyPaymentsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyPaymentsPage.prototype.goToRecordDeposit = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__record_deposit_record_deposit__["a" /* RecordDepositPage */]);
    };
    MyPaymentsPage.prototype.goToCalculatePayment = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calculate_payment_calculate_payment__["a" /* CalculatePaymentPage */]);
    };
    return MyPaymentsPage;
}());
MyPaymentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-payments',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\my-payments\my-payments.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Payments\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <div class="spacer" style="height:102px;" id="myPayments-spacer11"></div>\n\n  <button id="myPayments-button13" ion-button color="calm" block style="color:#000000;" on-click="goToCalculatePayment()">\n\n    Calculate Amount to be Deposited\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:42px;" id="myPayments-spacer13"></div>\n\n  <button id="myPayments-button14" ion-button color="calm" block style="color:#000000;" on-click="goToRecordDeposit()">\n\n    Record Payment made\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:103px;" id="myPayments-spacer12"></div>\n\n  <div>\n\n    <img src="assets/img/ynKQMmmQ1eii12NHRr6A_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\my-payments\my-payments.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MyPaymentsPage);

//# sourceMappingURL=my-payments.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordDepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_payments_my_payments__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_deposit_slip_upload_deposit_slip__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecordDepositPage = (function () {
    function RecordDepositPage(navCtrl, http, Alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.Alert = Alert;
        this.finalAmount = "null";
        this.amount = "null";
        this.year = "null";
        this.month = "null";
        this.date = "null";
        var d = new Date();
        var date = d.getMonth() + 1;
        var userID = localStorage.getItem('Agent_ID');
        this.http.post('http://localhost:8081/GZone/GettotalAmount.php?agentId=' + userID + '&date=' + date, "").subscribe(function (response) {
            var res = response.json();
            _this.amount = res[0].total_amount;
        });
    }
    RecordDepositPage.prototype.goToUploadDepositSlip = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__upload_deposit_slip_upload_deposit_slip__["a" /* UploadDepositSlipPage */]);
    };
    RecordDepositPage.prototype.addDeposit = function () {
        var _this = this;
        if (this.year == "null" || this.month == "null" || this.date == "null") {
            var alert_1 = this.Alert.create({ title: 'Error', subTitle: 'All fields must be filled', buttons: ['OK'] });
            alert_1.present();
        }
        else {
            var Agent_Id = localStorage.getItem('Agent_ID');
            this.http.post('http://localhost:8081/GZone/recordDeposit.php?agentId=' + Agent_Id + '&year=' + this.year.trim() + '&month=' + this.month.trim() + '&date=' + this.date.trim(), "").subscribe(function (response) {
                console.log(response);
                if (response.statusText) {
                    var alert_2 = _this.Alert.create({ title: 'Success', subTitle: 'Successfull Added', buttons: ['OK'] });
                    alert_2.present();
                    _this.amount = "null";
                    _this.year = "null";
                    _this.month = "null";
                    _this.date = "null";
                }
                else {
                    var alert_3 = _this.Alert.create({ title: 'Error', subTitle: 'Error Inserting values', buttons: ['OK'] });
                    alert_3.present();
                }
            });
            var userID = localStorage.getItem('Agent_ID');
            this.http.post('https://senda-mobile-app-senuraa.c9users.io/mail/index.php?agentId=' + userID + '&amount=' + this.amount, "").subscribe(function (response) {
                console.log(response);
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_payments_my_payments__["a" /* MyPaymentsPage */]);
        }
    };
    return RecordDepositPage;
}());
RecordDepositPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-record-deposit',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\record-deposit\record-deposit.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Record Deposit\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9">\n\n    <form id="recordDeposit-form6" method="POST">\n\n  <div id="recordDeposit-markdown7" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Deposit Date\n\n    </p>\n\n  </div>\n\n    <div class="spacer" style="width:300px;height:18px;" id="recordDeposit-spacer14"></div>\n\n    <ion-item id="recordDeposit-select2">\n\n      <ion-label>\n\n        Month\n\n      </ion-label>\n\n      <ion-select name="month" [(ngModel)]="month">\n\n        <ion-option value=\'1\'>\n\n          January\n\n        </ion-option>\n\n        <ion-option value=\'2\'>\n\n          February\n\n        </ion-option>\n\n        <ion-option value=\'3\'>\n\n          March\n\n        </ion-option>\n\n        <ion-option value=\'4\'>\n\n          April\n\n        </ion-option>\n\n        <ion-option value=\'5\'>\n\n          May\n\n        </ion-option>\n\n        <ion-option value=\'6\'>\n\n          June\n\n        </ion-option>\n\n        <ion-option value=\'7\'>\n\n          July\n\n        </ion-option>\n\n        <ion-option value=\'8\'>\n\n          August\n\n        </ion-option>\n\n        <ion-option value=\'9\'>\n\n          September\n\n        </ion-option>\n\n        <ion-option value=\'10\'>\n\n          October\n\n        </ion-option>\n\n        <ion-option value=\'11\'>\n\n          November\n\n        </ion-option>\n\n        <ion-option value=\'12\'>\n\n          December\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item id="recordDeposit-select3">\n\n      <ion-label>\n\n        Year\n\n      </ion-label>\n\n      <ion-select name="year" [(ngModel)]="year">\n\n        <ion-option>\n\n        2015\n\n        </ion-option>\n\n        <ion-option>\n\n        2016\n\n        </ion-option>\n\n        <ion-option>\n\n          2017\n\n        </ion-option>\n\n        <ion-option>\n\n          2018\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item id="recordDeposit-select3">\n\n      <ion-label>\n\n        Date\n\n      </ion-label>\n\n      <ion-select name="date" [(ngModel)]="date">\n\n        <ion-option>\n\n        1\n\n        </ion-option>\n\n        <ion-option>\n\n        2\n\n        </ion-option>\n\n        <ion-option>\n\n        3\n\n        </ion-option>\n\n        <ion-option>\n\n        4\n\n        </ion-option>\n\n        <ion-option>\n\n        5\n\n        </ion-option>\n\n        <ion-option>\n\n        6\n\n        </ion-option>\n\n        <ion-option>\n\n        7\n\n        </ion-option>\n\n        <ion-option>\n\n        8\n\n        </ion-option>\n\n        <ion-option>\n\n        9\n\n        </ion-option>\n\n        <ion-option>\n\n        10\n\n        </ion-option>\n\n        <ion-option>\n\n        11\n\n        </ion-option>\n\n        <ion-option>\n\n        12\n\n        </ion-option>\n\n        <ion-option>\n\n        13\n\n        </ion-option>\n\n        <ion-option>\n\n        14\n\n        </ion-option>\n\n        <ion-option>\n\n        15\n\n        </ion-option>\n\n        <ion-option>\n\n        16\n\n        </ion-option>\n\n        <ion-option>\n\n        17\n\n        </ion-option>\n\n        <ion-option>\n\n        18\n\n        </ion-option>\n\n        <ion-option>\n\n        19\n\n        </ion-option>\n\n        <ion-option>\n\n        20\n\n        </ion-option>\n\n        <ion-option>\n\n        21\n\n        </ion-option>\n\n        <ion-option>\n\n        22\n\n        </ion-option>\n\n        <ion-option>\n\n        23\n\n        </ion-option>\n\n        <ion-option>\n\n        24\n\n        </ion-option>\n\n        <ion-option>\n\n        25\n\n        </ion-option>\n\n        <ion-option>\n\n        26\n\n        </ion-option>\n\n        <ion-option>\n\n        27\n\n        </ion-option>\n\n        <ion-option>\n\n        28\n\n        </ion-option>\n\n        <ion-option>\n\n        29\n\n        </ion-option>\n\n        <ion-option>\n\n        30\n\n        </ion-option>\n\n        <ion-option>\n\n        31\n\n        </ion-option>\n\n        \n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  <div id="recordDeposit-markdown6" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Amount Deposited (LKR)\n\n    </p>\n\n  </div>\n\n    <ion-item id="recordDeposit-input3">\n\n      <ion-input type="number" disabled="true" placeholder="Amount" name="amount" [(ngModel)]="amount"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button ion-button color="calm" block style="color:#000000;" on-click="addDeposit()" >Submit</button>\n\n  <div class="spacer" style="width:300px;height:27px;" id="recordDeposit-spacer15"></div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\record-deposit\record-deposit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RecordDepositPage);

//# sourceMappingURL=record-deposit.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Edit_profile_Edit_profile__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyProfilePage = (function () {
    function MyProfilePage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.array = [];
        this.addver = localStorage.getItem('Advertiesements');
        this.array = this.addver.split(',');
        this.user = localStorage.getItem('Auth_Token');
        this.http
            .get('http://localhost:8081/GZone/view-profile.php?username=' + this.user)
            .subscribe(function (data) {
            var response = data.json();
            _this.res = response[0];
        }, function (error) {
            console.error(error);
        });
    }
    MyProfilePage.prototype.Edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Edit_profile_Edit_profile__["a" /* EditProfile */]);
    };
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\my-profile\my-profile.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Profile\n\n    </ion-title>\n\n    <button id="submit" ion-button style="float:right" on-click="Edit()">Edit</button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="page1" *ngIf="res">\n\n\n\n  <ion-card id="myProfile-card22">\n\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n              <!-- <img [src]="res.profile_photo" *ngIf="res.profile_photo" style="display:block;width:100%;height:200;margin-left:auto;margin-right:auto;" /> -->\n\n              <img [src]="res.profile_photo" *ngIf="res.profile_photo" style="display:block;width:100%;height:200;margin-left:auto;margin-right:auto;" />\n\n            </div>\n\n\n\n        </ion-list>\n\n\n\n      \n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      {{res.fname}} {{res.lname}}\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-cog" item-start></ion-icon>\n\n      <strong>Username:  </strong>{{res.user_name}}\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-home" item-start></ion-icon>\n\n      {{res.address}} \n\n   </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-recording" item-start></ion-icon>\n\n      {{res.tel_no}}\n\n     </ion-item>\n\n\n\n  </ion-list>\n\n    \n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-slides  autoplay="2000" loop="true" speed="2000" *ngIf="array">\n\n        <ion-slide class="slide-img" *ngFor="let x of array">\n\n             <img [src]="x"/>\n\n       </ion-slide>\n\n     </ion-slides>\n\n   </ion-footer>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\my-profile\my-profile.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
], MyProfilePage);

var _a, _b;
//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SubmitRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubmitRequestPage = (function () {
    function SubmitRequestPage(navCtrl, http, navparams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navparams = navparams;
        this.customer_id = "null";
        this.customer_name = "null";
        this.product_id = "null";
        this.agent_id = "null";
        this.telno = "null";
        this.quantity = "null";
        this.comments = "null";
        this.agent_id = localStorage.getItem('agentId');
        this.customer_id = localStorage.getItem('customer_id');
        this.customer_name = localStorage.getItem('Auth_Token');
        this.product_id = localStorage.getItem('product_id');
        this.http
            .get('http://localhost:8081/GZone/w_warrantydetails.php?productID=' + this.product_id)
            .subscribe(function (data) {
            var response = data.json();
            _this.res = response[0];
        });
    }
    SubmitRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmitRequestPage');
    };
    /**ccheck whether the item falls within the warranty period*/
    SubmitRequestPage.prototype.SubmitRequest = function (params) { };
    return SubmitRequestPage;
}());
SubmitRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-submit-request',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\submit-request\submit-request.html"*/'<!--\n\n  Generated template for the SubmitRequestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Submit Request</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="submitrequestpage">\n\n  <div id="submitRequest-container1">\n\n\n\n    <div id="submitRequest-markdown1" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer ID : \n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{customer_id}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="submitRequest-markdown2" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer Name : \n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{customer_name}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="submitRequest-markdown3" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Product ID : \n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{product_id}}</ion-label>\n\n      </ion-item>\n\n\n\n    <div id="submitRequest-markdown4" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Product Name : \n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label fixed class=\'fixedLabel\' *ngIf="res">{{res.product_name}}</ion-label>\n\n      </ion-item>\n\n\n\n    <div id="submitRequest-markdown7" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer Contact Number :\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-input type="text"  name="telno" [(ngModel)]="telno"></ion-input>\n\n      </ion-item>\n\n\n\n      <div id="submitRequest-markdown5" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Quantity :\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-input type="txt"  name="quantity" [(ngModel)]="quantity"></ion-input>\n\n      </ion-item>\n\n\n\n      <div id="submitRequest-markdown6" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Special Remarks and Observations : \n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-input type="text"  name="comments" [(ngModel)]="comments"></ion-input>\n\n      </ion-item>\n\n\n\n      <div class="spacer" style="width:300px;height:20px;" id="submitRequest-spacer1"></div>\n\n\n\n      <button ion-button color="calm" block style="color:#000000;" on-click="SubmitRequest()">Submit Warranty Request</button>\n\n      \n\n  </div>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\submit-request\submit-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SubmitRequestPage);

//# sourceMappingURL=submit-request.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithinWarrantyPeriodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submit_request_submit_request__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WithinWarrantyPeriodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WithinWarrantyPeriodPage = (function () {
    function WithinWarrantyPeriodPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WithinWarrantyPeriodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithinWarrantyPeriodPage');
    };
    WithinWarrantyPeriodPage.prototype.goToSubmitRequest = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__submit_request_submit_request__["a" /* SubmitRequestPage */]);
    };
    return WithinWarrantyPeriodPage;
}());
WithinWarrantyPeriodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-within-warranty-period',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\within-warranty-period\within-warranty-period.html"*/'<!--\n\n  Generated template for the WithinWarrantyPeriodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Warranty Period</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="page_within_warranty_period">\n\n  <div class="spacer" style="width:300px;height:102px;" id="warrantyperiod-spacer1"></div>\n\n  <ion-title>Product Within Warranty Period!</ion-title>\n\n    \n\n  <div class="spacer" style="width:300px;height:42px;" id="warrantyHome-spacer2"></div>\n\n  <button id="warrantyperiod-button2" ion-button color="calm" block style="color:#000000;" on-click="goToSubmitRequest()">\n\n    Proceed to Submit Warranty Request\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:102px;" id="warrantyHome-spacer3"></div>\n\n  <div>\n\n    <img src="assets/img/TtHlAxrfTdiy3Y5Kpu0M_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\within-warranty-period\within-warranty-period.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WithinWarrantyPeriodPage);

//# sourceMappingURL=within-warranty-period.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarrantyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__within_warranty_period_within_warranty_period__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WarrantyDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WarrantyDetailsPage = (function () {
    function WarrantyDetailsPage(navCtrl, http, navparams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navparams = navparams;
        this.productID = this.navparams.get("id");
        localStorage.setItem('product_id', this.productID);
        this.http
            .get('http://localhost:8081/GZone/w_warrantydetails.php?productID=' + this.productID)
            .subscribe(function (data) {
            var response = data.json();
            _this.res = response[0];
        });
    }
    WarrantyDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WarrantyDetailsPage');
    };
    /**create function for to go to page which shows the warranty details of the particular product*/
    WarrantyDetailsPage.prototype.checkWarrantyPeriod = function (params) {
        var _this = this;
        var d1 = new Date();
        var date1 = d1.getDate();
        var orderId = localStorage.getItem('orderId');
        this.http.get('http://localhost:8081/GZone/getdeliverydate.php?orderId=' + orderId).subscribe(function (response) {
            _this.res_date = response.json();
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__within_warranty_period_within_warranty_period__["a" /* WithinWarrantyPeriodPage */]);
    };
    return WarrantyDetailsPage;
}());
WarrantyDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-warranty-details',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\warranty-details\warranty-details.html"*/'<!--\n\n  Generated template for the WarrantyDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Warranty Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="warrantydetailspage">\n\n  <div id="warrantydetails-container1">\n\n\n\n    <div id="warrantydetails-markdown1" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Product ID :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.productID}}</ion-label>\n\n      </ion-item>\n\n\n\n    <div id="warrantydetails-markdown2" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Product Name :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label fixed class=\'fixedLabel\' *ngIf="res">{{res.product_name}}</ion-label>\n\n      </ion-item>\n\n\n\n    <div id="warrantydetails-markdown3" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Product Description :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label stacked fixed class=\'fixedLabel\' *ngIf="res">{{res.product_description}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="warrantydetails-markdown4" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Warranty Period (in weeks):\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.warranty_period}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="warrantydetails-markdown5" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Warranty Validity Conditions :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label fixed class=\'fixedLabel\' *ngIf="res">{{res.w_validity_conditions}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div class="spacer" style="width:300px;height:10px;" id="warrantydetails-spacer1"></div>\n\n\n\n      <button ion-button color="calm" block style="color:#000000;" on-click="checkWarrantyPeriod()">Check for warranty period </button>\n\n      \n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\warranty-details\warranty-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WarrantyDetailsPage);

//# sourceMappingURL=warranty-details.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__warranty_details_warranty_details__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ClaimOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClaimOrderPage = (function () {
    function ClaimOrderPage(navCtrl, http, navparams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navparams = navparams;
        this.orderId = this.navparams.get("id");
        localStorage.setItem('order_id', this.orderId);
        this.http.get('http://localhost:8081/GZone/w_claimorder.php?id=' + this.orderId).subscribe(function (data) {
            _this.res = data.json();
            _this.http.get('http://localhost:8081/GZone/w_claimorderitems.php?id=' + _this.orderId).subscribe(function (response) {
                _this.items = response.json();
            });
        });
    }
    ClaimOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClaimOrderPage');
    };
    /**create function for to go to page which shows the warranty details of the particular product*/
    ClaimOrderPage.prototype.goToWarrantyDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__warranty_details_warranty_details__["a" /* WarrantyDetailsPage */], {
            id: params.productID
        });
    };
    return ClaimOrderPage;
}());
ClaimOrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-claim-order',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\claim-order\claim-order.html"*/'<!--\n\n  Generated template for the ClaimOrderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Order Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<div id="claimorder-markdown1" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Order ID \n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{orderId}}</ion-label>\n\n      </ion-item>\n\n  \n\n<div padding id="pageclaimorder" *ngIf="items" >\n\n  <ion-card id="claimorder-card1" *ngFor="let item of items">\n\n\n\n    <ion-list>\n\n\n\n      <ion-item color="none" id="order-list-item1"> Product Name: {{item.product_name}}</ion-item>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n\n\n        <img [src]="item.product_photo"/>\n\n          \n\n      </div>\n\n      <ion-list id="order-list5">\n\n        <ion-item color="none" id="order-list-item2">\n\n        \n\n         Product ID: {{item.productID}} <br>\n\n        \n\n         Product Description: {{item.description}} <br>\n\n         \n\n         Quantity: {{item.qty}} <br>\n\n         \n\n         Total Price: {{item.tot_price}} <br>\n\n\n\n         <button id="submit" ion-button color="calm" block style="color:#000000;" on-click="goToWarrantyDetails(item)" >Get Warranty Details</button>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n\n\n  </div>\n\n\n\n  \n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\claim-order\claim-order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ClaimOrderPage);

//# sourceMappingURL=claim-order.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarrantyOrderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__claim_order_claim_order__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WarrantyOrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WarrantyOrderListPage = (function () {
    function WarrantyOrderListPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.customer_id = localStorage.getItem('customer_id');
        this.http.get('http://localhost:8081/GZone/w_getorderlist.php?customer_id=' + this.customer_id).subscribe(function (data) {
            _this.res = data.json();
        });
    }
    WarrantyOrderListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WarrantyOrderListPage');
    };
    /**create function for to go to page which shows details of order*/
    WarrantyOrderListPage.prototype.goToClaimOrder = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__claim_order_claim_order__["a" /* ClaimOrderPage */], { id: params.orderID });
    };
    return WarrantyOrderListPage;
}());
WarrantyOrderListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-warranty-order-list',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\warranty-order-list\warranty-order-list.html"*/'<!--\n\n  Generated template for the WarrantyOrderListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Customer Orders</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="page-orderlist">\n\n\n\n	<div id="orderlist-markdown1" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer ID\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{customer_id}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer1"></div>\n\n\n\n  <form id="orderlist-form">\n\n    \n\n    <ion-item color="none" on-click="goToClaimOrder(cust_order)" id="orderlist-list-item1" *ngFor="let cust_order of res">\n\n      <ion-thumbnail item-left>\n\n        \n\n        <img src="assets/img/images.png"  />\n\n      </ion-thumbnail>\n\n\n\n      <h2>\n\n        Order ID: {{cust_order.orderID}}<br>\n\n        No. of Items: {{cust_order.no_items}}<br>\n\n        Total Price: {{cust_order.total_amount}} <br>\n\n        Delivery Date: {{cust_order.deliverydate}}<br>\n\n      </h2> \n\n      \n\n    </ion-item>\n\n  </form>\n\n\n\n  \n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\warranty-order-list\warranty-order-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], WarrantyOrderListPage);

//# sourceMappingURL=warranty-order-list.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousClaimsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__warranty_order_list_warranty_order_list__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PreviousClaimsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PreviousClaimsPage = (function () {
    function PreviousClaimsPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.customer_id = localStorage.getItem('customer_id');
        this.http.get('http://localhost:8081/GZone/w_getpreviousclaims.php?customer_id=' + this.customer_id).subscribe(function (data) {
            _this.res = data.json();
        });
    }
    PreviousClaimsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousClaimsPage');
    };
    /**create function for to go to page which shows the list of orders of customer*/
    PreviousClaimsPage.prototype.goToWarrantyOrderList = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__warranty_order_list_warranty_order_list__["a" /* WarrantyOrderListPage */]);
    };
    return PreviousClaimsPage;
}());
PreviousClaimsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-claims',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\previous-claims\previous-claims.html"*/'<!--\n\n  Generated template for the PreviousClaimsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Previous Claims</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="page-previousclaims">\n\n\n\n	<div id="previousclaims-markdown1" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer ID  \n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label> {{customer_id}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer1"></div>\n\n\n\n  <form id="previousclaims-form">\n\n    \n\n    <ion-item color="none" id="previousclaims-list-item1" *ngFor="let claim of res">\n\n      <ion-thumbnail item-left>\n\n        \n\n        <img src="assets/img/spanner.png"  />\n\n      </ion-thumbnail>\n\n\n\n      <h2>\n\n        Order ID: {{claim.orderID}} <br>\n\n        Product Name: {{claim.prod_name}} <br>\n\n        Date: {{claim.date}} <br>\n\n        Quantity: {{claim.qty}}<br>\n\n      </h2>\n\n      \n\n    </ion-item>\n\n  </form>\n\n\n\n  <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer2"></div>\n\n\n\n  <button id="submit" ion-button color="calm" block style="color:#000000;" on-click="goToWarrantyOrderList()">Next</button>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\previous-claims\previous-claims.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PreviousClaimsPage);

//# sourceMappingURL=previous-claims.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitClaimNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__previous_claims_previous_claims__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SubmitClaimNamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubmitClaimNamePage = (function () {
    function SubmitClaimNamePage(navCtrl, http, Alert) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.Alert = Alert;
        this.account = {
            custname: "",
        };
    }
    SubmitClaimNamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmitClaimNamePage');
    };
    /**create function for to go to page which shows the previous claims of customer*/
    SubmitClaimNamePage.prototype.goToPreviousClaims = function (params) {
        var _this = this;
        if (this.account.custname == "") {
            var alert_1 = this.Alert.create({ title: 'Error', subTitle: 'Please Enter Customer Name', buttons: ['OK'] });
            alert_1.present();
        }
        else {
            this
                .http
                .get('http://localhost:8081/GZone/w_getcustname.php?custname=' + this.account.custname)
                .subscribe(function (response) {
                var res = response.json();
                if (_this.account.custname == res[0].customer_name) {
                    localStorage.setItem('Auth_Token', res[0].customer_name);
                    localStorage.setItem('customer_id', res[0].customer_id);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__previous_claims_previous_claims__["a" /* PreviousClaimsPage */]);
                }
                else {
                    var alert_2 = _this.Alert.create({ title: 'Error', subTitle: 'Incorrect Customer Name. Please Re-enter!', buttons: ['OK'] });
                    alert_2.present();
                }
            }, function (error) {
                console.error(error);
            });
        }
    };
    return SubmitClaimNamePage;
}());
SubmitClaimNamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-submit-claim-name',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\submit-claim-name\submit-claim-name.html"*/'<!--\n\n  Generated template for the SubmitClaimNamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Submit Claim</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="submitclaim_namepage">\n\n  <div id="submitclaim_name-container1">\n\n    <div id="submitclaim_name-markdown1" class="show-list-numbers-and-dots">\n\n\n\n     <div class="spacer" style="width:300px;height:150px;" id="submitclaim_name-spacer1"></div>\n\n\n\n      <p style="color:#000000;">\n\n        Enter Customer Name\n\n      </p>\n\n    </div>\n\n    <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer2"></div>\n\n      <ion-item>\n\n        <ion-input type="text"  name="custname" [(ngModel)]="account.custname" placeholder=""></ion-input>\n\n      </ion-item>\n\n    \n\n    </div>\n\n      \n\n      <div class="spacer" style="width:300px;height:200px;" id="submitclaim_name-spacer3"></div>\n\n\n\n   \n\n      \n\n      <button id="submit" ion-button color="calm" block style="color:#000000;" on-click="goToPreviousClaims()">Next</button>\n\n	  \n\n\n\n  \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\submit-claim-name\submit-claim-name.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SubmitClaimNamePage);

//# sourceMappingURL=submit-claim-name.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TrackingStatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TrackingStatusPage = (function () {
    function TrackingStatusPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.request_id = localStorage.getItem('request_id');
        this.http
            .get('http://localhost:8081/GZone/w_trackrequestid.php?request_id=' + this.request_id)
            .subscribe(function (data) {
            var response = data.json();
            _this.res = response[0];
        });
    }
    TrackingStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackingStatusPage');
    };
    return TrackingStatusPage;
}());
TrackingStatusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tracking-status',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\tracking-status\tracking-status.html"*/'<!--\n\n  Generated template for the TrackingStatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Request Status</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="requeststatuspage" >\n\n  <div id="requeststatus-container1">\n\n\n\n    <div id="requeststatus-markdown1" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Warranty Request ID :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.request_id}}</ion-label>\n\n      </ion-item>\n\n\n\n    <div id="requeststatus-markdown2" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer ID :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.customer_id}}</ion-label>\n\n      </ion-item>\n\n\n\n    <div id="requeststatus-markdown3" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer Name:\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.customer_name}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="requeststatus-markdown4" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer Telephone Number :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.customer_telno}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="requeststatus-markdown5" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Warranty Request Status :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.status}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="requeststatus-markdown6" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Additional Comments :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label stacked fixed class=\'fixedLabel\' *ngIf="res">{{res.comments}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div class="spacer" style="width:300px;height:20px;" id="requeststatus-spacer1"></div>\n\n\n\n      \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\tracking-status\tracking-status.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], TrackingStatusPage);

//# sourceMappingURL=tracking-status.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackRequestIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking_status_tracking_status__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TrackRequestIdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TrackRequestIdPage = (function () {
    function TrackRequestIdPage(navCtrl, http, Alert) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.Alert = Alert;
        this.account = {
            request_id: "",
        };
    }
    TrackRequestIdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackRequestIdPage');
    };
    TrackRequestIdPage.prototype.goToTrackingStatus = function (params) {
        var _this = this;
        if (this.account.request_id == "") {
            var alert_1 = this.Alert.create({ title: 'Error', subTitle: 'Please Enter Warranty Request ID', buttons: ['OK'] });
            alert_1.present();
        }
        else {
            this
                .http
                .get('http://localhost:8081/GZone/w_trackrequestid.php?request_id=' + this.account.request_id)
                .subscribe(function (response) {
                var res = response.json();
                if (_this.account.request_id == res[0].request_id) {
                    localStorage.setItem('request_id', res[0].request_id);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tracking_status_tracking_status__["a" /* TrackingStatusPage */]);
                }
                else {
                    var alert_2 = _this.Alert.create({ title: 'Error', subTitle: 'Incorrect Warranty Request ID. Please Re-enter!', buttons: ['OK'] });
                    alert_2.present();
                }
            }, function (error) {
                console.error(error);
            });
        }
    };
    return TrackRequestIdPage;
}());
TrackRequestIdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-track-request-id',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\track-request-id\track-request-id.html"*/'<!--\n\n  Generated template for the TrackRequestIdPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Track by ID</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="trackrequestid">\n\n  <div id="trackrequestid-container1">\n\n    <div id="trackrequestid-markdown1" class="show-list-numbers-and-dots">\n\n\n\n     <div class="spacer" style="width:300px;height:150px;" id="trackrequestid-spacer1"></div>\n\n\n\n      <p style="color:#000000;">\n\n        Enter Warranty Claim Request ID\n\n      </p>\n\n    </div>\n\n    <div class="spacer" style="width:300px;height:20px;" id="trackrequestid-spacer2"></div>\n\n      <ion-item>\n\n        <ion-input type="text"  name="request_id" [(ngModel)]="account.request_id" placeholder=""></ion-input>\n\n      </ion-item>\n\n    \n\n    </div>\n\n      \n\n      <div class="spacer" style="width:300px;height:200px;" id="trackrequestid-spacer3"></div>\n\n\n\n   \n\n      \n\n      <button id="submit" ion-button color="calm" block style="color:#000000;" on-click="goToTrackingStatus()">Find Status</button>\n\n	  \n\n\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\track-request-id\track-request-id.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], TrackRequestIdPage);

//# sourceMappingURL=track-request-id.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingStatusListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TrackingStatusListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TrackingStatusListPage = (function () {
    function TrackingStatusListPage(navCtrl, http, navparams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navparams = navparams;
        this.request_id = this.navparams.get("request_id");
        this.http
            .get('http://localhost:8081/GZone/w_trackrequestid.php?request_id=' + this.request_id)
            .subscribe(function (data) {
            var response = data.json();
            _this.res = response[0];
        });
    }
    TrackingStatusListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackingStatusListPage');
    };
    return TrackingStatusListPage;
}());
TrackingStatusListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tracking-status-list',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\tracking-status-list\tracking-status-list.html"*/'<!--\n\n  Generated template for the TrackingStatusListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Request Status</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="requeststatuspage" >\n\n  <div id="requeststatus-container1">\n\n\n\n    <div id="requeststatus-markdown1" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Warranty Request ID :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.request_id}}</ion-label>\n\n      </ion-item>\n\n\n\n    <div id="requeststatus-markdown2" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer ID :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.customer_id}}</ion-label>\n\n      </ion-item>\n\n\n\n    <div id="requeststatus-markdown3" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer Name:\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.customer_name}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="requeststatus-markdown4" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Customer Telephone Number :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.customer_telno}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="requeststatus-markdown5" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Warranty Request Status :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label *ngIf="res">{{res.status}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div id="requeststatus-markdown6" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Additional Comments :\n\n      </p>\n\n    </div>\n\n\n\n      <ion-item>\n\n        <ion-label stacked fixed class=\'fixedLabel\' *ngIf="res">{{res.comments}}</ion-label>\n\n      </ion-item>\n\n\n\n      <div class="spacer" style="width:300px;height:20px;" id="requeststatus-spacer1"></div>\n\n\n\n      \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\tracking-status-list\tracking-status-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TrackingStatusListPage);

//# sourceMappingURL=tracking-status-list.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking_status_list_tracking_status_list__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TrackListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TrackListPage = (function () {
    function TrackListPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.agent_id = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/w_getagenttracklist.php?agent_id=' + this.agent_id).subscribe(function (data) {
            _this.res = data.json();
        });
    }
    TrackListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackListPage');
    };
    TrackListPage.prototype.goToTrackingStatus = function (params) {
        if (!params)
            params = {};
        localStorage.setItem('request_id', this.res[0].request_id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tracking_status_list_tracking_status_list__["a" /* TrackingStatusListPage */], { request_id: params.request_id });
    };
    return TrackListPage;
}());
TrackListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-track-list',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\track-list\track-list.html"*/'<!--\n\n  Generated template for the TrackListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Warranty Requests</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="page-tracklist">\n\n\n\n\n\n      <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer1"></div>\n\n\n\n  <form id="tracklist-form">\n\n    \n\n    <ion-item color="none" on-click="goToTrackingStatus(w_track)" id="tracklist-list-item1" *ngFor="let w_track of res" >\n\n      <ion-thumbnail item-left>\n\n        \n\n        <img src="assets/img/spanner.png">\n\n      </ion-thumbnail>\n\n\n\n      <h2>\n\n        Warranty Request ID: {{w_track.request_id}}<br>\n\n        Customer Name: {{w_track.customer_id}}<br>\n\n        Submitted Date: {{w_track.sub_date}} <br>\n\n        Status: {{w_track.status}}<br>\n\n      </h2> \n\n      \n\n    </ion-item>\n\n  </form>\n\n\n\n  \n\n</ion-content>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\track-list\track-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], TrackListPage);

//# sourceMappingURL=track-list.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackClaimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_request_id_track_request_id__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__track_list_track_list__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TrackClaimPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TrackClaimPage = (function () {
    function TrackClaimPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TrackClaimPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackClaimPage');
    };
    TrackClaimPage.prototype.goToTrackRequestID = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__track_request_id_track_request_id__["a" /* TrackRequestIdPage */]);
    };
    TrackClaimPage.prototype.goToTrackingList = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__track_list_track_list__["a" /* TrackListPage */]);
    };
    return TrackClaimPage;
}());
TrackClaimPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-track-claim',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\track-claim\track-claim.html"*/'<!--\n\n  Generated template for the TrackClaimPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Track Request</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="trackrequestpage">\n\n  <div class="spacer" style="width:300px;height:102px;" id="trackRequest-spacer1"></div>\n\n  <button id="trackRequest-button1" ion-button color="calm" block style="color:#000000;" on-click="goToTrackRequestID()">\n\n    Search by Warranty Request ID\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:42px;" id="trackRequest-spacer2"></div>\n\n  <button id="trackRequest-button2" ion-button color="calm" block style="color:#000000;" on-click="goToTrackingList()">\n\n    My Warranty Request List\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:102px;" id="trackRequest-spacer3"></div>\n\n  <div>\n\n    <img src="assets/img/TtHlAxrfTdiy3Y5Kpu0M_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\track-claim\track-claim.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TrackClaimPage);

//# sourceMappingURL=track-claim.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarrantyHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submit_claim_name_submit_claim_name__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__track_claim_track_claim__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**import pages*/


/**
 * Generated class for the WarrantyHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WarrantyHomePage = (function () {
    function WarrantyHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WarrantyHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WarrantyHomePage');
    };
    /**create function for submit claim button-go to submit-claim page*/
    WarrantyHomePage.prototype.goToSubmitClaim = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__submit_claim_name_submit_claim_name__["a" /* SubmitClaimNamePage */]);
    };
    /**create function for track claim button-go to track-claim page*/
    WarrantyHomePage.prototype.goToTrackClaim = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__track_claim_track_claim__["a" /* TrackClaimPage */]);
    };
    return WarrantyHomePage;
}());
WarrantyHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-warranty-home',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\warranty-home\warranty-home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Warranty Claims\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <div class="spacer" style="width:300px;height:102px;" id="warrantyHome-spacer1"></div>\n\n  <button id="warrantyHome-button1" ion-button color="calm" block style="color:#000000;" on-click="goToSubmitClaim()">\n\n    Submit Warranty Claim Request\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:42px;" id="warrantyHome-spacer2"></div>\n\n  <button id="warrantyHome-button2" ion-button color="calm" block style="color:#000000;" on-click="goToTrackClaim()">\n\n    Track Progress of Warranty Claim\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:102px;" id="warrantyHome-spacer3"></div>\n\n  <div>\n\n    <img src="assets/img/TtHlAxrfTdiy3Y5Kpu0M_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\warranty-home\warranty-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WarrantyHomePage);

//# sourceMappingURL=warranty-home.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/claim-order/claim-order.module": [
		293,
		12
	],
	"../pages/previous-claims/previous-claims.module": [
		295,
		11
	],
	"../pages/submit-claim-name/submit-claim-name.module": [
		296,
		10
	],
	"../pages/submit-request/submit-request.module": [
		290,
		9
	],
	"../pages/track-claim/track-claim.module": [
		301,
		8
	],
	"../pages/track-list/track-list.module": [
		300,
		7
	],
	"../pages/track-request-id/track-request-id.module": [
		298,
		6
	],
	"../pages/tracking-status-list/tracking-status-list.module": [
		299,
		5
	],
	"../pages/tracking-status/tracking-status.module": [
		297,
		4
	],
	"../pages/warranty-details/warranty-details.module": [
		292,
		3
	],
	"../pages/warranty-home/warranty-home.module": [
		302,
		2
	],
	"../pages/warranty-order-list/warranty-order-list.module": [
		294,
		1
	],
	"../pages/within-warranty-period/within-warranty-period.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_orders_my_orders__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_deliveries_my_deliveries__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_payments_my_payments__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__warranty_home_warranty_home__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePagePage = (function () {
    function HomePagePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.array = [];
        this.addver = localStorage.getItem('Advertiesements');
        this.array = this.addver.split(',');
    }
    HomePagePage.prototype.goToMyOrders = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__my_orders_my_orders__["a" /* MyOrdersPage */]);
    };
    HomePagePage.prototype.goToMyDeliveries = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_deliveries_my_deliveries__["a" /* MyDeliveriesPage */]);
    };
    HomePagePage.prototype.goToMyPayments = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_payments_my_payments__["a" /* MyPaymentsPage */]);
    };
    HomePagePage.prototype.goToMyProfile = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__["a" /* MyProfilePage */]);
    };
    HomePagePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**create function for go to warranty home*/
    HomePagePage.prototype.goToWarrantyHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__warranty_home_warranty_home__["a" /* WarrantyHomePage */]);
    };
    return HomePagePage;
}());
HomePagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-page',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\home-page\home-page.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <ion-title>\n\n      Home Page\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n  <div class="spacer" style="width:300px;height:40px;" id="homePage-spacer8"></div>\n\n  <button id="homePage-button8" ion-button color="calm" block style="color:#000000;border-radius:0px 0px 0px 0px;" on-click="goToMyOrders()">\n\n    My Orders\n\n  </button>\n\n  <button id="homePage-button9" ion-button color="calm" block style="color:#000000;" on-click="goToMyDeliveries()">\n\n    My Deliveries\n\n  </button>\n\n  <button id="homePage-button10" ion-button color="calm" block style="color:#000000;" on-click="goToMyPayments()">\n\n    My Payments\n\n  </button>\n\n  <button id="homePage-button13" ion-button color="calm" block style="color:#000000;" on-click="goToWarrantyHome()">\n\n    Handle Warranty Claims\n\n  </button>\n\n  <button id="homePage-button11" ion-button color="calm" block style="color:#000000;" on-click="goToMyProfile()">\n\n    View Profile\n\n  </button>\n\n  <button id="homePage-button12" ion-button color="calm" block style="color:#000000;" on-click="goToLogin()">\n\n    Sign out\n\n  </button>\n\n  <div>\n\n      <img src="assets/img/5BVK1GSduXGR69BddHAA_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:30%;height:auto;margin-left:auto;" />\n\n    </div>\n\n  <div class="spacer" style="width:300px;height:52px;" id="homePage-spacer9"></div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-slides  autoplay="2000" loop="true" speed="2000" *ngIf="array">\n\n        <ion-slide class="slide-img" *ngFor="let x of array">\n\n             <img [src]="x"/>\n\n       </ion-slide>\n\n     </ion-slides>\n\n   </ion-footer>\n\n\n\n\n\n<!--on-click direct to relevant pages--><ion-footer>\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\home-page\home-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePagePage);

//# sourceMappingURL=home-page.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_purchases_previous_purchases__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pending_orders_pending_orders__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyOrdersPage = (function () {
    function MyOrdersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyOrdersPage.prototype.goToPreviousPurchases = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__previous_purchases_previous_purchases__["a" /* PreviousPurchasesPage */]);
    };
    MyOrdersPage.prototype.goToPendingOrders = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pending_orders_pending_orders__["a" /* PendingOrdersPage */]);
    };
    return MyOrdersPage;
}());
MyOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-orders',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\my-orders\my-orders.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Orders\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <div class="spacer" style="width:300px;height:102px;" id="myOrders-spacer6"></div>\n\n  <button id="myOrders-button6" ion-button color="calm" block style="color:#000000;" on-click="goToPreviousPurchases()">\n\n    View Previous Purchases\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:42px;" id="myOrders-spacer7"></div>\n\n  <button id="myOrders-button7" ion-button color="calm" block style="color:#000000;" on-click="goToPendingOrders()">\n\n    View Pending Orders\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:102px;" id="myOrders-spacer10"></div>\n\n  <div>\n\n    <img src="assets/img/TtHlAxrfTdiy3Y5Kpu0M_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\my-orders\my-orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MyOrdersPage);

//# sourceMappingURL=my-orders.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousPurchasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviousPurchasesPage = (function () {
    function PreviousPurchasesPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/previous-purchases.php?username=' + this.userID).subscribe(function (data) {
            console.log(data);
            _this.res = data.json();
        });
    }
    PreviousPurchasesPage.prototype.goToOrder = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_order__["a" /* OrderPage */], {
            id: params.orderID
        });
    };
    PreviousPurchasesPage.prototype.deletePurchases = function (params) {
        var _this = this;
        this.userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/delete.php?username=' + this.userID).subscribe(function (data) {
            console.log(data);
            _this.res = data.json();
        });
    };
    return PreviousPurchasesPage;
}());
PreviousPurchasesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-purchases',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\previous-purchases\previous-purchases.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Previous Purchases\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7" *ngIf="res">\n\n\n\n  <ion-list id="previousPurchases-list3">\n\n    \n\n\n\n      <ion-item color="none" on-click="goToOrder(order)" id="previousPurchases-list-item10" *ngFor="let order of res">\n\n        <ion-thumbnail item-left>\n\n            <!-- <img [src]="order.image"/> -->\n\n            <img src="assets/img/images.png"  />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Order ID: {{order.orderID}}\n\n        </h2>\n\n      </ion-item>\n\n      \n\n      <button ion-button color="calm" block style="color:#000000;" on-click="deletePurchases()">Delete Purchases</button>\n\n   \n\n    </ion-list>\n\n  '/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\previous-purchases\previous-purchases.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PreviousPurchasesPage);

//# sourceMappingURL=previous-purchases.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_orders_customer_orders__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_orders_personal_orders__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingOrdersPage = (function () {
    function PendingOrdersPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.dispatched = false;
        this.userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/pending-order.php?username=' + this.userID).subscribe(function (data) {
            _this.res = data.json();
            if (_this.res.status == 'dispatched') {
                _this.dispatched = true;
            }
            else {
                _this.dispatched = false;
            }
        });
    }
    PendingOrdersPage.prototype.goToCustomerOrders = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__customer_orders_customer_orders__["a" /* CustomerOrder */]);
    };
    PendingOrdersPage.prototype.goToPersonalOrders = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__personal_orders_personal_orders__["a" /* PersonalOrderPage */]);
    };
    return PendingOrdersPage;
}());
PendingOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pending-orders',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\pending-orders\pending-orders.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>\n\n           Pending Orders\n\n          </ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n      <ion-content padding id="page5">\n\n        <div class="spacer" style="width:300px;height:102px;" id="myOrders-spacer6"></div>\n\n        <button id="myOrders-button6" ion-button color="calm" block style="color:#000000;" on-click="goToPersonalOrders()">\n\n          View Orders For Personal Use\n\n        </button>\n\n        <div class="spacer" style="width:300px;height:42px;" id="myOrders-spacer7"></div>\n\n        <button id="myOrders-button7" ion-button color="calm" block style="color:#000000;" on-click="goToCustomerOrders()">\n\n          View Orders For Customers\n\n        </button>\n\n        <div class="spacer" style="width:300px;height:102px;" id="myOrders-spacer10"></div>\n\n        <div>\n\n          <img src="assets/img/TtHlAxrfTdiy3Y5Kpu0M_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n        </div>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\pending-orders\pending-orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PendingOrdersPage);

//# sourceMappingURL=pending-orders.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerOrder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerOrder = (function () {
    function CustomerOrder(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/customer-orders.php?username=' + this.userID).subscribe(function (data) {
            console.log(data);
            _this.res = data.json();
        });
    }
    CustomerOrder.prototype.goToOrder = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_order__["a" /* OrderPage */], {
            id: params.orderID
        });
    };
    CustomerOrder.prototype.updateDelivery = function () {
        // this.http.post('http://localhost:8081/GZone/update-status.php?staus='+'delivered').subscribe((data) => {
        //   console.log(data);
        //   this.res = data.json();
        // });
    };
    return CustomerOrder;
}());
CustomerOrder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-delivery',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\customer-orders\customer-orders.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <ion-title>\n\n            Orders For Customers\n\n          </ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n      <ion-content padding id="page7" *ngIf="res">\n\n      \n\n        <ion-list id="customerOrders-list3">\n\n          \n\n      \n\n            <ion-item color="none" on-click="goToOrder(order)" id="customerOrders-list-item10" *ngFor="let order of res">\n\n              <ion-thumbnail item-left>\n\n                  <!-- <img [src]="order.image"/> -->\n\n                  <img src="assets/img/images.png"  />\n\n              </ion-thumbnail>\n\n              <h2>\n\n                Order ID: {{order.orderID}}\n\n              </h2>\n\n              <ion-badge item-end *ngIf="order.status == \'dispatched\'">dispatched</ion-badge>\n\n              <ion-badge item-end *ngIf="order.status == \'pending\'">pending</ion-badge>\n\n              <button ion-button color="light" *ngIf="order.status == \'dispatched\'" on-click="updateDelivery()">recieved</button>\n\n            </ion-item>\n\n          </ion-list>\n\n        '/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\customer-orders\customer-orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], CustomerOrder);

//# sourceMappingURL=customer-orders.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonalOrderPage = (function () {
    function PersonalOrderPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/personal-orders.php?username=' + this.userID).subscribe(function (data) {
            console.log(data);
            _this.res = data.json();
        });
    }
    PersonalOrderPage.prototype.goToOrder = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_order__["a" /* OrderPage */], {
            id: params.orderID
        });
    };
    return PersonalOrderPage;
}());
PersonalOrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal-orders',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\personal-orders\personal-orders.html"*/'\n\n<ion-header>\n\n        <ion-navbar>\n\n          <ion-title>\n\n            Orders For Personal Use\n\n          </ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n      <ion-content padding id="page7" *ngIf="res">\n\n      \n\n        <ion-list id="personalOrders-list3">\n\n          \n\n      \n\n            <ion-item color="none" on-click="goToOrder(order)" id="personalOrders-list-item10" *ngFor="let order of res">\n\n              <ion-thumbnail item-left>\n\n                  <!-- <img [src]="order.image"/> -->\n\n                  <img src="assets/img/images.png"  />\n\n              </ion-thumbnail>\n\n              <h2>\n\n                Order ID: {{order.orderID}}\n\n              </h2>\n\n              <ion-badge item-end *ngIf="order.status == \'dispatched\'">dispatched</ion-badge>\n\n              <ion-badge item-end *ngIf="order.status == \'pending\'">pending</ion-badge>\n\n              <button ion-button color="light" *ngIf="order.status == \'dispatched\'" on-click="updateDelivery()">recieved</button>\n\n            </ion-item>\n\n          </ion-list>\n\n        '/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\personal-orders\personal-orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PersonalOrderPage);

//# sourceMappingURL=personal-orders.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDeliveriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery_delivery__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyDeliveriesPage = (function () {
    function MyDeliveriesPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/my-deliveries.php?username=' + this.userID).subscribe(function (data) {
            _this.res = data.json();
        });
    }
    MyDeliveriesPage.prototype.goToDelivery = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__delivery_delivery__["a" /* DeliveryPage */], {
            id: params.orderID
        });
    };
    MyDeliveriesPage.prototype.Deliver = function () {
    };
    return MyDeliveriesPage;
}());
MyDeliveriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-deliveries',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\my-deliveries\my-deliveries.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      My Deliveries\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <form id="myDeliveries-form3">\n\n    \n\n    <ion-item color="none" on-click="goToDelivery(deliver)" id="myDeliveries-list-item49" *ngFor="let deliver of res">\n\n      <ion-thumbnail item-left>\n\n        <!-- <img /> -->\n\n        <img src="assets/img/images.png"  />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Order ID: {{deliver.orderID}} \n\n      </h2>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\my-deliveries\my-deliveries.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MyDeliveriesPage);

//# sourceMappingURL=my-deliveries.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeliveryPage = (function () {
    function DeliveryPage(navCtrl, http, navparams, Alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navparams = navparams;
        this.Alert = Alert;
        this.deliver = false;
        this.orderId = this.navparams.get("id");
        this.user = localStorage.getItem('Auth_Token');
        this.http.get('http://localhost:8081/GZone/order.php?id=' + this.orderId).subscribe(function (data) {
            _this.res = data.json();
            console.log(_this.res[0]);
            if (_this.res[0].status == "pending") {
                _this.deliver = true;
            }
            else {
                _this.deliver = false;
            }
            _this.http.get('http://localhost:8081/GZone/orderItems.php?id=' + _this.orderId).subscribe(function (response) {
                _this.items = response.json();
            });
        });
    }
    DeliveryPage.prototype.Deliver = function () {
        var _this = this;
        var alert = this.Alert.create({
            title: 'Confirm purchase',
            message: 'Do you want to continue?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        var d = new Date();
                        var date = d.getMonth() + 1;
                        console.log(date);
                        var status = "delivered";
                        _this.http.get('http://localhost:8081/GZone/updateDelivery.php?id=' + _this.orderId + '&date=' + date + '&status=' + status).subscribe(function (response) {
                            console.log(response);
                            _this.deliver = false;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    return DeliveryPage;
}());
DeliveryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-delivery',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\delivery\delivery.html"*/'\n\n<ion-content>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Delivery\n\n      </ion-title>\n\n    </ion-navbar>\n\n  <div padding id="page10" *ngIf="items">\n\n      <button ion-button style="float:right" on-click="Deliver()" *ngIf="deliver">Deliver</button>\n\n    <ion-card id="order-card21"  *ngFor="let item of items">\n\n      <ion-list>\n\n        <ion-item color="none" id="order-list-item28">\n\n           Product Id: {{item.productID}}\n\n           <!-- {{item.product_photo}} -->\n\n        </ion-item>\n\n        <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n            <img [src]="item.product_photo"/>\n\n        </div>\n\n        <ion-list id="order-list5">\n\n          <ion-item color="none" id="order-list-item76">\n\n          <ion-icon name="calculator" item-start></ion-icon>\n\n           Quantity: {{item.qty}}\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-list>\n\n    </ion-card>\n\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\delivery\delivery.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DeliveryPage);

//# sourceMappingURL=delivery.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDepositSlipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadDepositSlipPage = (function () {
    function UploadDepositSlipPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return UploadDepositSlipPage;
}());
UploadDepositSlipPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-upload-deposit-slip',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\upload-deposit-slip\upload-deposit-slip.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Upload Deposit Slip\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13">\n\n  <div class="spacer" style="width:300px;height:84px;" id="uploadDepositSlip-spacer18"></div>\n\n  <ion-list id="uploadDepositSlip-list6">\n\n    <ion-item color="positive" id="uploadDepositSlip-list-item70">\n\n      <ion-icon name="cloud-upload" item-left></ion-icon>\n\n      Upload Image\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="spacer" style="width:300px;height:52px;" id="uploadDepositSlip-spacer19"></div>\n\n  <button id="uploadDepositSlip-button16" ion-button color="calm" block style="color:#000000;">\n\n    Submit\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:123px;" id="uploadDepositSlip-spacer20"></div>\n\n  <div>\n\n    <img src="assets/img/6OiE3mQuGnVGOBw5GDVA_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\upload-deposit-slip\upload-deposit-slip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], UploadDepositSlipPage);

//# sourceMappingURL=upload-deposit-slip.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatePaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__record_deposit_record_deposit__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculatePaymentPage = (function () {
    function CalculatePaymentPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        var d = new Date();
        var date = d.getMonth() + 1;
        var userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/calculateItemData.php?agent_Id=' + userID + '&date=' + date).subscribe(function (response) {
            _this.respon1 = response.json();
            _this.total = _this.respon1[0].sum;
            _this.commision = _this.total * 0.07;
            _this.deposit = _this.total - _this.commision;
        });
    }
    CalculatePaymentPage.prototype.totalAmount = function () {
        var _this = this;
        var d = new Date();
        var date = d.getMonth() + 1;
        var userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/updateAmount.php?agent_Id=' + userID + '&total=' + this.deposit + '&date=' + date).subscribe(function (response) {
            console.log(response);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__record_deposit_record_deposit__["a" /* RecordDepositPage */]);
        });
    };
    return CalculatePaymentPage;
}());
CalculatePaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calculate-payment',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\calculate-payment\calculate-payment.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Calculate Payment\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12">\n\n  <div id="calculatePayment-container1">\n\n    <div id="calculatePayment-markdown9" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Delivery Order Total (LKR)\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{total | number:\'1.2-2\'}}</ion-label>\n\n      </ion-item>\n\n    <div id="calculatePayment-markdown13" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        (-) Commission (LKR)\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{commision | number:\'1.2-2\'}}</ion-label>\n\n      </ion-item>\n\n      <div class="spacer" style="width:300px;height:68px;" id="calculatePayment-spacer16"></div>\n\n    <div id="calculatePayment-markdown12" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Amount to be Deposited\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{deposit | number:\'1.2-2\'}}</ion-label>\n\n      </ion-item>\n\n      <button ion-button color="calm" block style="color:#000000;" on-click="totalAmount()">Deposit</button>\n\n      \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\calculate-payment\calculate-payment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], CalculatePaymentPage);

//# sourceMappingURL=calculate-payment.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfile = (function () {
    function EditProfile(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.user = localStorage.getItem('Auth_Token');
        this.http
            .get('http://localhost:8081/GZone/view-profile.php?username=' + this.user)
            .subscribe(function (data) {
            var response = data.json();
            _this.res = response[0];
            _this.name = _this.res.fname + " " + _this.res.lname;
        }, function (error) {
            console.error(error);
        });
    }
    EditProfile.prototype.editProfile = function () {
        var _this = this;
        var Agent_Id = localStorage.getItem('Agent_ID');
        this.http.post('http://localhost:8081/GZone/edit-profile.php?agentId=' + Agent_Id + '&lname=' + this.res.lname + '&fname=' + this.res.fname + '&address=' + this.res.address + '&tel_no=' + this.res.tel_no, "")
            .subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile__["a" /* MyProfilePage */]);
        }, function (error) {
            console.error(error);
        });
    };
    return EditProfile;
}());
EditProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-delivery',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\Edit-profile\Edit-Profile.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Profile\n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="page1" *ngIf="res">\n\n\n\n  <ion-card id="myProfile-card22">\n\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n              <!-- <img [src]="res.profile_photo" *ngIf="res.profile_photo" style="display:block;width:100%;height:200;margin-left:auto;margin-right:auto;" /> -->\n\n              <img [src]="res.profile_photo" *ngIf="res.profile_photo" style="display:block;width:100%;height:200;margin-left:auto;margin-right:auto;" />\n\n            </div>\n\n\n\n        </ion-list>\n\n\n\n      \n\n\n\n  <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-icon name="person" item-start></ion-icon>\n\n          <ion-input type="text"  [(ngModel)]="res.fname"></ion-input>\n\n        </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-input type="text"  [(ngModel)]="res.lname"></ion-input>\n\n            </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-cog" item-start></ion-icon>\n\n      <strong>Username:  </strong>{{res.user_name}}\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-home" item-start ></ion-icon>\n\n      <ion-input type="text"  [(ngModel)]="res.address"></ion-input>\n\n   </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-recording" item-start></ion-icon>\n\n      <ion-input type="text"  [(ngModel)]="res.tel_no"></ion-input>\n\n     </ion-item>\n\n     <button ion-button color="calm" block style="color:#000000;" on-click="editProfile()" >Save</button>\n\n  </ion-list>\n\n    \n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\Edit-profile\Edit-Profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], EditProfile);

//# sourceMappingURL=Edit-profile.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_profile_my_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_payments_my_payments__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_deliveries_my_deliveries__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_orders_my_orders__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_page_home_page__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_previous_purchases_previous_purchases__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pending_orders_pending_orders__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_record_deposit_record_deposit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_order__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_delivery_delivery__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_calculate_payment_calculate_payment__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_upload_deposit_slip_upload_deposit_slip__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Edit_profile_Edit_profile__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_warranty_home_warranty_home__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_submit_claim_name_submit_claim_name__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_track_claim_track_claim__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_previous_claims_previous_claims__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_warranty_order_list_warranty_order_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_claim_order_claim_order__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_warranty_details_warranty_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_submit_request_submit_request__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_track_request_id_track_request_id__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_track_list_track_list__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tracking_status_tracking_status__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_tracking_status_list_tracking_status_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_personal_orders_personal_orders__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_customer_orders_customer_orders__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_within_warranty_period_within_warranty_period__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_splash_screen__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_my_payments_my_payments__["a" /* MyPaymentsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_my_deliveries_my_deliveries__["a" /* MyDeliveriesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_page_home_page__["a" /* HomePagePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_previous_purchases_previous_purchases__["a" /* PreviousPurchasesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pending_orders_pending_orders__["a" /* PendingOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_record_deposit_record_deposit__["a" /* RecordDepositPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_delivery_delivery__["a" /* DeliveryPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_calculate_payment_calculate_payment__["a" /* CalculatePaymentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_upload_deposit_slip_upload_deposit_slip__["a" /* UploadDepositSlipPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_Edit_profile_Edit_profile__["a" /* EditProfile */],
            __WEBPACK_IMPORTED_MODULE_30__pages_personal_orders_personal_orders__["a" /* PersonalOrderPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_customer_orders_customer_orders__["a" /* CustomerOrder */],
            __WEBPACK_IMPORTED_MODULE_18__pages_warranty_home_warranty_home__["a" /* WarrantyHomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_submit_claim_name_submit_claim_name__["a" /* SubmitClaimNamePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_track_claim_track_claim__["a" /* TrackClaimPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_previous_claims_previous_claims__["a" /* PreviousClaimsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_warranty_order_list_warranty_order_list__["a" /* WarrantyOrderListPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_claim_order_claim_order__["a" /* ClaimOrderPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_warranty_details_warranty_details__["a" /* WarrantyDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_submit_request_submit_request__["a" /* SubmitRequestPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_track_request_id_track_request_id__["a" /* TrackRequestIdPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_track_list_track_list__["a" /* TrackListPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_tracking_status_tracking_status__["a" /* TrackingStatusPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_tracking_status_list_tracking_status_list__["a" /* TrackingStatusListPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_within_warranty_period_within_warranty_period__["a" /* WithinWarrantyPeriodPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_33__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/submit-request/submit-request.module#SubmitRequestPageModule', name: 'SubmitRequestPage', segment: 'submit-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/within-warranty-period/within-warranty-period.module#WithinWarrantyPeriodPageModule', name: 'WithinWarrantyPeriodPage', segment: 'within-warranty-period', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/warranty-details/warranty-details.module#WarrantyDetailsPageModule', name: 'WarrantyDetailsPage', segment: 'warranty-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/claim-order/claim-order.module#ClaimOrderPageModule', name: 'ClaimOrderPage', segment: 'claim-order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/warranty-order-list/warranty-order-list.module#WarrantyOrderListPageModule', name: 'WarrantyOrderListPage', segment: 'warranty-order-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-claims/previous-claims.module#PreviousClaimsPageModule', name: 'PreviousClaimsPage', segment: 'previous-claims', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/submit-claim-name/submit-claim-name.module#SubmitClaimNamePageModule', name: 'SubmitClaimNamePage', segment: 'submit-claim-name', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tracking-status/tracking-status.module#TrackingStatusPageModule', name: 'TrackingStatusPage', segment: 'tracking-status', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/track-request-id/track-request-id.module#TrackRequestIdPageModule', name: 'TrackRequestIdPage', segment: 'track-request-id', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tracking-status-list/tracking-status-list.module#TrackingStatusListPageModule', name: 'TrackingStatusListPage', segment: 'tracking-status-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/track-list/track-list.module#TrackListPageModule', name: 'TrackListPage', segment: 'track-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/track-claim/track-claim.module#TrackClaimPageModule', name: 'TrackClaimPage', segment: 'track-claim', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/warranty-home/warranty-home.module#WarrantyHomePageModule', name: 'WarrantyHomePage', segment: 'warranty-home', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_my_profile_my_profile__["a" /* MyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_my_payments_my_payments__["a" /* MyPaymentsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_my_deliveries_my_deliveries__["a" /* MyDeliveriesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_my_orders_my_orders__["a" /* MyOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_page_home_page__["a" /* HomePagePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_previous_purchases_previous_purchases__["a" /* PreviousPurchasesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pending_orders_pending_orders__["a" /* PendingOrdersPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_record_deposit_record_deposit__["a" /* RecordDepositPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_delivery_delivery__["a" /* DeliveryPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_calculate_payment_calculate_payment__["a" /* CalculatePaymentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_upload_deposit_slip_upload_deposit_slip__["a" /* UploadDepositSlipPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_Edit_profile_Edit_profile__["a" /* EditProfile */],
            __WEBPACK_IMPORTED_MODULE_18__pages_warranty_home_warranty_home__["a" /* WarrantyHomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_submit_claim_name_submit_claim_name__["a" /* SubmitClaimNamePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_track_claim_track_claim__["a" /* TrackClaimPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_previous_claims_previous_claims__["a" /* PreviousClaimsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_warranty_order_list_warranty_order_list__["a" /* WarrantyOrderListPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_claim_order_claim_order__["a" /* ClaimOrderPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_customer_orders_customer_orders__["a" /* CustomerOrder */],
            __WEBPACK_IMPORTED_MODULE_30__pages_personal_orders_personal_orders__["a" /* PersonalOrderPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_warranty_details_warranty_details__["a" /* WarrantyDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_submit_request_submit_request__["a" /* SubmitRequestPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_track_request_id_track_request_id__["a" /* TrackRequestIdPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_track_list_track_list__["a" /* TrackListPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_tracking_status_tracking_status__["a" /* TrackingStatusPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_tracking_status_list_tracking_status_list__["a" /* TrackingStatusListPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_within_warranty_period_within_warranty_period__["a" /* WithinWarrantyPeriodPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\app\app.html"*/'<ion-menu [content]="mainContent">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Menu\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content id="side-menu21">\n\n    <div>\n\n      <img src="assets/img/9QAPDmx5QDGYgfQA1v9Q_12314128_1674935919443516_3250136307729642455_n.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </div>\n\n    <ion-list id="menu-list1">\n\n      <ion-item color="none" id="menu-list-item1">\n\n        My Orders\n\n      </ion-item>\n\n      <ion-item color="none" id="menu-list-item2">\n\n        My Deliveries\n\n      </ion-item>\n\n      <ion-item color="none" id="menu-list-item3">\n\n        My Payments\n\n      </ion-item>\n\n      <ion-item color="none" id="menu-list-item5">\n\n        View Profile\n\n      </ion-item>\n\n      <ion-item color="none" id="menu-list-item4">\n\n        Sign out\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderPage = (function () {
    function OrderPage(navCtrl, http, navparams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navparams = navparams;
        this.orderId = this.navparams.get("id");
        this.user = localStorage.getItem('Auth_Token');
        this.http.get('http://localhost:8081/GZone/order.php?id=' + this.orderId).subscribe(function (data) {
            _this.res = data.json();
            _this.http.get('http://localhost:8081/GZone/orderItems.php?id=' + _this.orderId).subscribe(function (response) {
                _this.items = response.json();
            });
        });
    }
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\order\order.html"*/'\n\n<ion-content>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Order\n\n    </ion-title>\n\n  </ion-navbar>\n\n<div padding id="page10" *ngIf="items">\n\n  <ion-card id="order-card21"  *ngFor="let item of items">\n\n    <ion-list>\n\n      <ion-item color="none" id="order-list-item28">\n\n         Product ID: {{item.productID}}\n\n         <!-- {{item.product_photo}} -->\n\n      </ion-item>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n          <img [src]="item.product_photo"/>\n\n      </div>\n\n      <ion-list id="order-list5">\n\n        <ion-item color="none" id="order-list-item76">\n\n        <ion-icon name="calculator" item-start></ion-icon>\n\n         Quantity: {{item.qty}}\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n  </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa28\Desktop\Senda\MobileApp\MobileAppGZONETECHNOLOGIES\src\pages\order\order.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map