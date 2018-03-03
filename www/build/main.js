webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
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
        selector: 'page-order',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/order/order.html"*/'\n<ion-content>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Order\n    </ion-title>\n  </ion-navbar>\n<div padding id="page10" *ngIf="items">\n  <ion-card id="order-card21"  *ngFor="let item of items">\n    <ion-list>\n      <ion-item color="none" id="order-list-item28">\n         Product ID: {{item.productID}}\n         <!-- {{item.product_photo}} -->\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n          <img [src]="item.product_photo"/>\n      </div>\n      <ion-list id="order-list5">\n        <ion-item color="none" id="order-list-item76">\n        <ion-icon name="calculator" item-start></ion-icon>\n         Quantity: {{item.qty}}\n        </ion-item>\n      </ion-list>\n    </ion-list>\n  </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/order/order.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_deposit_record_deposit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculate_payment_calculate_payment__ = __webpack_require__(208);
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
        selector: 'page-my-payments',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/my-payments/my-payments.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      My Payments\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <div class="spacer" style="height:102px;" id="myPayments-spacer11"></div>\n  <button id="myPayments-button13" ion-button color="calm" block style="color:#000000;" on-click="goToCalculatePayment()">\n    Calculate Amount to be Deposited\n  </button>\n  <div class="spacer" style="width:300px;height:42px;" id="myPayments-spacer13"></div>\n  <button id="myPayments-button14" ion-button color="calm" block style="color:#000000;" on-click="goToRecordDeposit()">\n    Record Payment made\n  </button>\n  <div class="spacer" style="width:300px;height:103px;" id="myPayments-spacer12"></div>\n  <div>\n    <img src="assets/img/ynKQMmmQ1eii12NHRr6A_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/my-payments/my-payments.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_payments_my_payments__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_deposit_slip_upload_deposit_slip__ = __webpack_require__(207);
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
        selector: 'page-record-deposit',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/record-deposit/record-deposit.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Record Deposit\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n    <form id="recordDeposit-form6" method="POST">\n  <div id="recordDeposit-markdown7" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Deposit Date\n    </p>\n  </div>\n    <div class="spacer" style="width:300px;height:18px;" id="recordDeposit-spacer14"></div>\n    <ion-item id="recordDeposit-select2">\n      <ion-label>\n        Month\n      </ion-label>\n      <ion-select name="month" [(ngModel)]="month">\n        <ion-option value=\'1\'>\n          January\n        </ion-option>\n        <ion-option value=\'2\'>\n          February\n        </ion-option>\n        <ion-option value=\'3\'>\n          March\n        </ion-option>\n        <ion-option value=\'4\'>\n          April\n        </ion-option>\n        <ion-option value=\'5\'>\n          May\n        </ion-option>\n        <ion-option value=\'6\'>\n          June\n        </ion-option>\n        <ion-option value=\'7\'>\n          July\n        </ion-option>\n        <ion-option value=\'8\'>\n          August\n        </ion-option>\n        <ion-option value=\'9\'>\n          September\n        </ion-option>\n        <ion-option value=\'10\'>\n          October\n        </ion-option>\n        <ion-option value=\'11\'>\n          November\n        </ion-option>\n        <ion-option value=\'12\'>\n          December\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="recordDeposit-select3">\n      <ion-label>\n        Year\n      </ion-label>\n      <ion-select name="year" [(ngModel)]="year">\n        <ion-option>\n        2015\n        </ion-option>\n        <ion-option>\n        2016\n        </ion-option>\n        <ion-option>\n          2017\n        </ion-option>\n        <ion-option>\n          2018\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item id="recordDeposit-select3">\n      <ion-label>\n        Date\n      </ion-label>\n      <ion-select name="date" [(ngModel)]="date">\n        <ion-option>\n        1\n        </ion-option>\n        <ion-option>\n        2\n        </ion-option>\n        <ion-option>\n        3\n        </ion-option>\n        <ion-option>\n        4\n        </ion-option>\n        <ion-option>\n        5\n        </ion-option>\n        <ion-option>\n        6\n        </ion-option>\n        <ion-option>\n        7\n        </ion-option>\n        <ion-option>\n        8\n        </ion-option>\n        <ion-option>\n        9\n        </ion-option>\n        <ion-option>\n        10\n        </ion-option>\n        <ion-option>\n        11\n        </ion-option>\n        <ion-option>\n        12\n        </ion-option>\n        <ion-option>\n        13\n        </ion-option>\n        <ion-option>\n        14\n        </ion-option>\n        <ion-option>\n        15\n        </ion-option>\n        <ion-option>\n        16\n        </ion-option>\n        <ion-option>\n        17\n        </ion-option>\n        <ion-option>\n        18\n        </ion-option>\n        <ion-option>\n        19\n        </ion-option>\n        <ion-option>\n        20\n        </ion-option>\n        <ion-option>\n        21\n        </ion-option>\n        <ion-option>\n        22\n        </ion-option>\n        <ion-option>\n        23\n        </ion-option>\n        <ion-option>\n        24\n        </ion-option>\n        <ion-option>\n        25\n        </ion-option>\n        <ion-option>\n        26\n        </ion-option>\n        <ion-option>\n        27\n        </ion-option>\n        <ion-option>\n        28\n        </ion-option>\n        <ion-option>\n        29\n        </ion-option>\n        <ion-option>\n        30\n        </ion-option>\n        <ion-option>\n        31\n        </ion-option>\n        \n      </ion-select>\n    </ion-item>\n\n  <div id="recordDeposit-markdown6" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Amount Deposited (LKR)\n    </p>\n  </div>\n    <ion-item id="recordDeposit-input3">\n      <ion-input type="number" disabled="true" placeholder="Amount" name="amount" [(ngModel)]="amount"></ion-input>\n    </ion-item>\n  </form>\n  <button ion-button color="calm" block style="color:#000000;" on-click="addDeposit()" >Submit</button>\n  <div class="spacer" style="width:300px;height:27px;" id="recordDeposit-spacer15"></div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/record-deposit/record-deposit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RecordDepositPage);

//# sourceMappingURL=record-deposit.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarrantyOrderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__claim_order_claim_order__ = __webpack_require__(285);
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
    function WarrantyOrderListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WarrantyOrderListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WarrantyOrderListPage');
    };
    /**create function for to go to page which shows details of order*/
    WarrantyOrderListPage.prototype.goToClaimOrder = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__claim_order_claim_order__["a" /* ClaimOrderPage */]);
    };
    return WarrantyOrderListPage;
}());
WarrantyOrderListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-warranty-order-list',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/warranty-order-list/warranty-order-list.html"*/'<!--\n  Generated template for the WarrantyOrderListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Customer Orders</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="page-orderlist">\n\n	<div id="orderlist-markdown9" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Customer ID\n      </p>\n    </div>\n      <ion-item>\n        <ion-label></ion-label>\n      </ion-item>\n\n      <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer16"></div>\n\n  <form id="orderlist-form">\n    \n    <ion-item color="none" on-click="goToClaimOrder()" id="orderlist-list-item49" >\n      <ion-thumbnail item-left>\n        \n        <img src="assets/img/images.png"  />\n      </ion-thumbnail>\n\n      <h2>\n        \n      </h2>\n      \n    </ion-item>\n  </form>\n\n  \n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/warranty-order-list/warranty-order-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WarrantyOrderListPage);

//# sourceMappingURL=warranty-order-list.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousClaimsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__warranty_order_list_warranty_order_list__ = __webpack_require__(103);
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
    function PreviousClaimsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreviousClaimsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousClaimsPage');
    };
    /**create function for to go to page which shows the list of orders of customer*/
    PreviousClaimsPage.prototype.goToWarrantyOrderList = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__warranty_order_list_warranty_order_list__["a" /* WarrantyOrderListPage */]);
    };
    return PreviousClaimsPage;
}());
PreviousClaimsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-claims',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/previous-claims/previous-claims.html"*/'<!--\n  Generated template for the PreviousClaimsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Previous Claims</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="page-previousclaims">\n\n	<div id="previousclaims-markdown9" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Customer ID\n      </p>\n    </div>\n      <ion-item>\n        <ion-label></ion-label>\n      </ion-item>\n\n      <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer16"></div>\n\n  <form id="previousclaims-form">\n    \n    <ion-item color="none" id="previousclaims-list-item49" >\n      <ion-thumbnail item-left>\n        \n        <img src="assets/img/spanner.png"  />\n      </ion-thumbnail>\n\n      <h2>\n        \n      </h2>\n      \n    </ion-item>\n  </form>\n\n  <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer16"></div>\n\n  <button id="submit" ion-button color="calm" block style="color:#000000;" on-click="goToWarrantyOrderList()">Next</button>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/previous-claims/previous-claims.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PreviousClaimsPage);

//# sourceMappingURL=previous-claims.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitClaimNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_claims_previous_claims__ = __webpack_require__(104);
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
    function SubmitClaimNamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubmitClaimNamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubmitClaimNamePage');
    };
    /**create function for to go to page which shows the previous claims of customer*/
    SubmitClaimNamePage.prototype.goToPreviousClaims = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__previous_claims_previous_claims__["a" /* PreviousClaimsPage */]);
    };
    return SubmitClaimNamePage;
}());
SubmitClaimNamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-submit-claim-name',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/submit-claim-name/submit-claim-name.html"*/'<!--\n  Generated template for the SubmitClaimNamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Submit Claim</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="page12">\n  <div id="submitclaim_name-container1">\n    <div id="submitclaim_name-markdown9" class="show-list-numbers-and-dots">\n\n     <div class="spacer" style="width:300px;height:150px;" id="submitclaim_name-spacer16"></div>\n\n      <p style="color:#000000;">\n        Enter Customer Name\n      </p>\n    </div>\n    <div class="spacer" style="width:300px;height:20px;" id="submitclaim_name-spacer16"></div>\n      <ion-item>\n        <ion-input type="text"  name="title"></ion-input>\n      </ion-item>\n    \n    </div>\n      \n      <div class="spacer" style="width:300px;height:200px;" id="submitclaim_name-spacer16"></div>\n\n   \n      \n      <button id="submit" ion-button color="calm" block style="color:#000000;" on-click="goToPreviousClaims()">Next</button>\n	  \n\n  \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/submit-claim-name/submit-claim-name.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SubmitClaimNamePage);

//# sourceMappingURL=submit-claim-name.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackClaimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
    return TrackClaimPage;
}());
TrackClaimPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-track-claim',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/track-claim/track-claim.html"*/'<!--\n  Generated template for the TrackClaimPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TrackClaim</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/track-claim/track-claim.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TrackClaimPage);

//# sourceMappingURL=track-claim.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarrantyHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submit_claim_name_submit_claim_name__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__track_claim_track_claim__ = __webpack_require__(106);
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
        selector: 'page-warranty-home',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/warranty-home/warranty-home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Warranty Claims\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <div class="spacer" style="width:300px;height:102px;" id="warrantyHome-spacer6"></div>\n  <button id="warrantyHome-button6" ion-button color="calm" block style="color:#000000;" on-click="goToSubmitClaim()">\n    Submit Warranty Claim Request\n  </button>\n  <div class="spacer" style="width:300px;height:42px;" id="warrantyHome-spacer7"></div>\n  <button id="warrantyHome-button7" ion-button color="calm" block style="color:#000000;" on-click="goToTrackClaim()">\n    Track Progress of Warranty Claim\n  </button>\n  <div class="spacer" style="width:300px;height:102px;" id="warrantyHome-spacer10"></div>\n  <div>\n    <img src="assets/img/TtHlAxrfTdiy3Y5Kpu0M_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/warranty-home/warranty-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WarrantyHomePage);

//# sourceMappingURL=warranty-home.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/claim-order/claim-order.module": [
		284,
		0
	],
	"../pages/previous-claims/previous-claims.module": [
		280,
		5
	],
	"../pages/submit-claim-name/submit-claim-name.module": [
		281,
		4
	],
	"../pages/track-claim/track-claim.module": [
		282,
		3
	],
	"../pages/warranty-home/warranty-home.module": [
		283,
		2
	],
	"../pages/warranty-order-list/warranty-order-list.module": [
		279,
		1
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_orders_my_orders__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_deliveries_my_deliveries__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_payments_my_payments__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__warranty_home_warranty_home__ = __webpack_require__(107);
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
        selector: 'page-home-page',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/home-page/home-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <div class="spacer" style="width:300px;height:40px;" id="homePage-spacer8"></div>\n  <button id="homePage-button8" ion-button color="calm" block style="color:#000000;border-radius:0px 0px 0px 0px;" on-click="goToMyOrders()">\n    My Orders\n  </button>\n  <button id="homePage-button9" ion-button color="calm" block style="color:#000000;" on-click="goToMyDeliveries()">\n    My Deliveries\n  </button>\n  <button id="homePage-button10" ion-button color="calm" block style="color:#000000;" on-click="goToMyPayments()">\n    My Payments\n  </button>\n  <button id="homePage-button13" ion-button color="calm" block style="color:#000000;" on-click="goToWarrantyHome()">\n    Handle Warranty Claims\n  </button>\n  <button id="homePage-button11" ion-button color="calm" block style="color:#000000;" on-click="goToMyProfile()">\n    View Profile\n  </button>\n  <button id="homePage-button12" ion-button color="calm" block style="color:#000000;" on-click="goToLogin()">\n    Sign out\n  </button>\n  <div class="spacer" style="width:300px;height:52px;" id="homePage-spacer9"></div>\n  <div>\n    <img src="assets/img/5BVK1GSduXGR69BddHAA_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:30%;height:auto;margin-left:auto;" />\n  </div>\n</ion-content>\n\n\n<!--on-click direct to relevant pages-->'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/home-page/home-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePagePage);

//# sourceMappingURL=home-page.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_purchases_previous_purchases__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pending_orders_pending_orders__ = __webpack_require__(204);
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
        selector: 'page-my-orders',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/my-orders/my-orders.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      My Orders\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <div class="spacer" style="width:300px;height:102px;" id="myOrders-spacer6"></div>\n  <button id="myOrders-button6" ion-button color="calm" block style="color:#000000;" on-click="goToPreviousPurchases()">\n    View Previous Purchases\n  </button>\n  <div class="spacer" style="width:300px;height:42px;" id="myOrders-spacer7"></div>\n  <button id="myOrders-button7" ion-button color="calm" block style="color:#000000;" on-click="goToPendingOrders()">\n    View Pending Orders\n  </button>\n  <div class="spacer" style="width:300px;height:102px;" id="myOrders-spacer10"></div>\n  <div>\n    <img src="assets/img/TtHlAxrfTdiy3Y5Kpu0M_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/my-orders/my-orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MyOrdersPage);

//# sourceMappingURL=my-orders.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousPurchasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order__ = __webpack_require__(100);
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
        selector: 'page-previous-purchases',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/previous-purchases/previous-purchases.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Previous Purchases\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7" *ngIf="res">\n\n  <ion-list id="previousPurchases-list3">\n    \n\n      <ion-item color="none" on-click="goToOrder(order)" id="previousPurchases-list-item10" *ngFor="let order of res">\n        <ion-thumbnail item-left>\n            <!-- <img [src]="order.image"/> -->\n            <img src="assets/img/images.png"  />\n        </ion-thumbnail>\n        <h2>\n          Order ID: {{order.orderID}}\n        </h2>\n      </ion-item>\n      \n      <button ion-button color="calm" block style="color:#000000;" on-click="deletePurchases()">Delete Purchases</button>\n   \n    </ion-list>\n  '/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/previous-purchases/previous-purchases.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PreviousPurchasesPage);

//# sourceMappingURL=previous-purchases.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order__ = __webpack_require__(100);
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
        this.userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/pending-order.php?username=' + this.userID).subscribe(function (data) {
            _this.res = data.json();
        });
    }
    PendingOrdersPage.prototype.goToOrder = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_order__["a" /* OrderPage */], {
            id: params.orderID
        });
    };
    return PendingOrdersPage;
}());
PendingOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pending-orders',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/pending-orders/pending-orders.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pending Orders\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8" *ngIf="res">\n  <ion-list id="pendingOrders-list4">\n    \n    <ion-item color="none"  on-click="goToOrder(order)" id="pendingOrders-list-item30" *ngFor="let order of res">\n      <ion-thumbnail item-left>\n        <!-- <img [src]="order.image"/> -->\n        <img src="assets/img/images.png"  />\n      </ion-thumbnail>\n      <h2>\n        Order ID: {{order.orderID}}\n      </h2>\n    </ion-item>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/pending-orders/pending-orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PendingOrdersPage);

//# sourceMappingURL=pending-orders.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDeliveriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery_delivery__ = __webpack_require__(206);
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
        selector: 'page-my-deliveries',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/my-deliveries/my-deliveries.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      My Deliveries\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="myDeliveries-form3">\n    \n    <ion-item color="none" on-click="goToDelivery(deliver)" id="myDeliveries-list-item49" *ngFor="let deliver of res">\n      <ion-thumbnail item-left>\n        <!-- <img /> -->\n        <img src="assets/img/images.png"  />\n      </ion-thumbnail>\n      <h2>\n        Order ID: {{deliver.orderID}} \n      </h2>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/my-deliveries/my-deliveries.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MyDeliveriesPage);

//# sourceMappingURL=my-deliveries.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
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
        selector: 'page-delivery',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/delivery/delivery.html"*/'\n<ion-content>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Delivery\n      </ion-title>\n    </ion-navbar>\n  <div padding id="page10" *ngIf="items">\n      <button ion-button style="float:right" on-click="Deliver()" *ngIf="deliver">Deliver</button>\n    <ion-card id="order-card21"  *ngFor="let item of items">\n      <ion-list>\n        <ion-item color="none" id="order-list-item28">\n           Product Id: {{item.productID}}\n           <!-- {{item.product_photo}} -->\n        </ion-item>\n        <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n            <img [src]="item.product_photo"/>\n        </div>\n        <ion-list id="order-list5">\n          <ion-item color="none" id="order-list-item76">\n          <ion-icon name="calculator" item-start></ion-icon>\n           Quantity: {{item.qty}}\n          </ion-item>\n        </ion-list>\n      </ion-list>\n    </ion-card>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/delivery/delivery.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DeliveryPage);

//# sourceMappingURL=delivery.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDepositSlipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        selector: 'page-upload-deposit-slip',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/upload-deposit-slip/upload-deposit-slip.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Upload Deposit Slip\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <div class="spacer" style="width:300px;height:84px;" id="uploadDepositSlip-spacer18"></div>\n  <ion-list id="uploadDepositSlip-list6">\n    <ion-item color="positive" id="uploadDepositSlip-list-item70">\n      <ion-icon name="cloud-upload" item-left></ion-icon>\n      Upload Image\n    </ion-item>\n  </ion-list>\n  <div class="spacer" style="width:300px;height:52px;" id="uploadDepositSlip-spacer19"></div>\n  <button id="uploadDepositSlip-button16" ion-button color="calm" block style="color:#000000;">\n    Submit\n  </button>\n  <div class="spacer" style="width:300px;height:123px;" id="uploadDepositSlip-spacer20"></div>\n  <div>\n    <img src="assets/img/6OiE3mQuGnVGOBw5GDVA_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/upload-deposit-slip/upload-deposit-slip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], UploadDepositSlipPage);

//# sourceMappingURL=upload-deposit-slip.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatePaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
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
        selector: 'page-calculate-payment',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/calculate-payment/calculate-payment.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Calculate Payment\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <div id="calculatePayment-container1">\n    <div id="calculatePayment-markdown9" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Delivery Order Total (LKR)\n      </p>\n    </div>\n      <ion-item>\n        <ion-label>{{total | number:\'1.2-2\'}}</ion-label>\n      </ion-item>\n    <div id="calculatePayment-markdown13" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        (-) Commission (LKR)\n      </p>\n    </div>\n      <ion-item>\n        <ion-label>{{commision | number:\'1.2-2\'}}</ion-label>\n      </ion-item>\n      <div class="spacer" style="width:300px;height:68px;" id="calculatePayment-spacer16"></div>\n    <div id="calculatePayment-markdown12" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        Amount to be Deposited\n      </p>\n    </div>\n      <ion-item>\n        <ion-label>{{deposit | number:\'1.2-2\'}}</ion-label>\n      </ion-item>\n      <button ion-button color="calm" block style="color:#000000;" on-click="totalAmount()">Deposit</button>\n      \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/calculate-payment/calculate-payment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], CalculatePaymentPage);

//# sourceMappingURL=calculate-payment.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
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
    return MyProfilePage;
}());
MyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-profile',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/my-profile/my-profile.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      My Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1" *ngIf="res">\n\n  <ion-card id="myProfile-card22">\n    <ion-list>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n              <!-- <img [src]="res.profile_photo" *ngIf="res.profile_photo" style="display:block;width:100%;height:200;margin-left:auto;margin-right:auto;" /> -->\n              <img [src]="res.profile_photo" *ngIf="res.profile_photo" style="display:block;width:100%;height:200;margin-left:auto;margin-right:auto;" />\n            </div>\n\n        </ion-list>\n\n      \n\n  <ion-list>\n    <ion-item>\n      <ion-icon name="person" item-start></ion-icon>\n      {{res.fname}} {{res.lname}}\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon name="ios-cog" item-start></ion-icon>\n      <strong>Username:  </strong>{{res.user_name}}\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="ios-home" item-start></ion-icon>\n      {{res.address}} \n   </ion-item>\n\n    <ion-item>\n      <ion-icon name="ios-recording" item-start></ion-icon>\n      {{res.tel_no}}\n     </ion-item>\n\n  </ion-list>\n    \n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/my-profile/my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_profile_my_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_payments_my_payments__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_deliveries_my_deliveries__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_orders_my_orders__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_page_home_page__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_previous_purchases_previous_purchases__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pending_orders_pending_orders__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_record_deposit_record_deposit__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_order__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_delivery_delivery__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_calculate_payment_calculate_payment__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_upload_deposit_slip_upload_deposit_slip__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_warranty_home_warranty_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_submit_claim_name_submit_claim_name__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_track_claim_track_claim__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_previous_claims_previous_claims__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_warranty_order_list_warranty_order_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_claim_order_claim_order__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(200);
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
            __WEBPACK_IMPORTED_MODULE_17__pages_warranty_home_warranty_home__["a" /* WarrantyHomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_submit_claim_name_submit_claim_name__["a" /* SubmitClaimNamePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_track_claim_track_claim__["a" /* TrackClaimPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_previous_claims_previous_claims__["a" /* PreviousClaimsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_warranty_order_list_warranty_order_list__["a" /* WarrantyOrderListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_claim_order_claim_order__["a" /* ClaimOrderPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/warranty-order-list/warranty-order-list.module#WarrantyOrderListPageModule', name: 'WarrantyOrderListPage', segment: 'warranty-order-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-claims/previous-claims.module#PreviousClaimsPageModule', name: 'PreviousClaimsPage', segment: 'previous-claims', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/submit-claim-name/submit-claim-name.module#SubmitClaimNamePageModule', name: 'SubmitClaimNamePage', segment: 'submit-claim-name', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/track-claim/track-claim.module#TrackClaimPageModule', name: 'TrackClaimPage', segment: 'track-claim', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/warranty-home/warranty-home.module#WarrantyHomePageModule', name: 'WarrantyHomePage', segment: 'warranty-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/claim-order/claim-order.module#ClaimOrderPageModule', name: 'ClaimOrderPage', segment: 'claim-order', priority: 'low', defaultHistory: [] }
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
            __WEBPACK_IMPORTED_MODULE_17__pages_warranty_home_warranty_home__["a" /* WarrantyHomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_submit_claim_name_submit_claim_name__["a" /* SubmitClaimNamePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_track_claim_track_claim__["a" /* TrackClaimPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_previous_claims_previous_claims__["a" /* PreviousClaimsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_warranty_order_list_warranty_order_list__["a" /* WarrantyOrderListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_claim_order_claim_order__["a" /* ClaimOrderPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(99);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <div>\n      <img src="assets/img/9QAPDmx5QDGYgfQA1v9Q_12314128_1674935919443516_3250136307729642455_n.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <ion-list id="menu-list1">\n      <ion-item color="none" id="menu-list-item1">\n        My Orders\n      </ion-item>\n      <ion-item color="none" id="menu-list-item2">\n        My Deliveries\n      </ion-item>\n      <ion-item color="none" id="menu-list-item3">\n        My Payments\n      </ion-item>\n      <ion-item color="none" id="menu-list-item5">\n        View Profile\n      </ion-item>\n      <ion-item color="none" id="menu-list-item4">\n        Sign out\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
    function ClaimOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClaimOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClaimOrderPage');
    };
    return ClaimOrderPage;
}());
ClaimOrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-claim-order',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/claim-order/claim-order.html"*/'<!--\n  Generated template for the ClaimOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ClaimOrder</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/claim-order/claim-order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ClaimOrderPage);

//# sourceMappingURL=claim-order.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_home_page__ = __webpack_require__(201);
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
                if (_this.account.username == res[0].user_name && _this.account.password == res[0].password) {
                    var alert_2 = _this.Alert.create({ title: 'Success', subTitle: 'Login Successful', buttons: ['OK'] });
                    alert_2.present();
                    localStorage.setItem('Auth_Token', res[0].user_name);
                    localStorage.setItem('Agent_ID', res[0].agentID);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_page_home_page__["a" /* HomePagePage */]);
                }
                else {
                    var alert_3 = _this.Alert.create({ title: 'Error', subTitle: 'Login Failed', buttons: ['OK'] });
                    alert_3.present();
                }
            }, function (error) {
                console.error(error);
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'page-login',template:/*ion-inline-start:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form (ngSubmit)="logForm()" id="login-form1" method="post" action="Login.php" onsubmit="">\n    <div>\n      <img src="assets/img/2ktNuGpvTE2ep0GsYvZ3_12314128_1674935919443516_3250136307729642455_n.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <div class="spacer" style="width:300px;height:26px;" id="login-spacer3"></div>\n    <ion-list id="login-list2">\n      <ion-item id="login-input1">\n      <i class="icon ion-home"></i>\n        <ion-label>\n          Username\n        </ion-label>\n        <ion-input type="text" name="username" [(ngModel)]="account.username" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-icon name="logo-yen"></ion-icon>\n        <ion-input type="password" name="password" [(ngModel)]="account.password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n<button id="submit" ion-button color="stable" block on-click="goToHomePage()">\n    Log in\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/rajiniwijayawardana/Desktop/MobileAppGZONETECHNOLOGIES/src/pages/login/login.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map