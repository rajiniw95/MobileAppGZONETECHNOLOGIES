webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-order',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\order\order.html"*/'\n\n<ion-content>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Order\n\n    </ion-title>\n\n  </ion-navbar>\n\n<div padding id="page10" *ngIf="items">\n\n  <ion-card id="order-card21"  *ngFor="let item of items">\n\n    <ion-list>\n\n      <ion-item color="none" id="order-list-item28">\n\n         Product ID: {{item.productID}}\n\n         <!-- {{item.product_photo}} -->\n\n      </ion-item>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n          <img [src]="item.product_photo"/>\n\n      </div>\n\n      <ion-list id="order-list5">\n\n        <ion-item color="none" id="order-list-item76">\n\n        <ion-icon name="calculator" item-start></ion-icon>\n\n         Quantity: {{item.qty}}\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-list>\n\n  </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\order\order.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_orders_my_orders__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_deliveries_my_deliveries__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_payments_my_payments__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_profile_my_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(99);
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
    return HomePagePage;
}());
HomePagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-page',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\home-page\home-page.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Home Page\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n  <div class="spacer" style="width:300px;height:40px;" id="homePage-spacer8"></div>\n\n  <button id="homePage-button8" ion-button color="calm" block style="color:#000000;border-radius:0px 0px 0px 0px;" on-click="goToMyOrders()">\n\n    My Orders\n\n  </button>\n\n  <button id="homePage-button9" ion-button color="calm" block style="color:#000000;" on-click="goToMyDeliveries()">\n\n    My Deliveries\n\n  </button>\n\n  <button id="homePage-button10" ion-button color="calm" block style="color:#000000;" on-click="goToMyPayments()">\n\n    My Payments\n\n  </button>\n\n  <button id="homePage-button11" ion-button color="calm" block style="color:#000000;" on-click="goToMyProfile()">\n\n    View Profile\n\n  </button>\n\n  <button id="homePage-button12" ion-button color="calm" block style="color:#000000;" on-click="goToLogin()">\n\n    Sign out\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:52px;" id="homePage-spacer9"></div>\n\n  <div>\n\n    <img src="assets/img/5BVK1GSduXGR69BddHAA_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:30%;height:auto;margin-left:auto;" />\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\home-page\home-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePagePage);

//# sourceMappingURL=home-page.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_purchases_previous_purchases__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pending_orders_pending_orders__ = __webpack_require__(197);
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
        selector: 'page-my-orders',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\my-orders\my-orders.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Orders\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <div class="spacer" style="width:300px;height:102px;" id="myOrders-spacer6"></div>\n\n  <button id="myOrders-button6" ion-button color="calm" block style="color:#000000;" on-click="goToPreviousPurchases()">\n\n    View Previous Purchases\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:42px;" id="myOrders-spacer7"></div>\n\n  <button id="myOrders-button7" ion-button color="calm" block style="color:#000000;" on-click="goToPendingOrders()">\n\n    View Pending Orders\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:102px;" id="myOrders-spacer10"></div>\n\n  <div>\n\n    <img src="assets/img/TtHlAxrfTdiy3Y5Kpu0M_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\my-orders\my-orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], MyOrdersPage);

//# sourceMappingURL=my-orders.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousPurchasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    return PreviousPurchasesPage;
}());
PreviousPurchasesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-purchases',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\previous-purchases\previous-purchases.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Previous Purchases\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7" *ngIf="res">\n\n\n\n  <ion-list id="previousPurchases-list3">\n\n    \n\n\n\n      <ion-item color="none" on-click="goToOrder(order)" id="previousPurchases-list-item10" *ngFor="let order of res">\n\n        <ion-thumbnail item-left>\n\n            <!-- <img [src]="order.image"/> -->\n\n            <img src="assets/img/images.png"  />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Order ID: {{order.orderID}}\n\n        </h2>\n\n      </ion-item>\n\n      \n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\previous-purchases\previous-purchases.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PreviousPurchasesPage);

//# sourceMappingURL=previous-purchases.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-pending-orders',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\pending-orders\pending-orders.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Pending Orders\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page8" *ngIf="res">\n\n  <ion-list id="pendingOrders-list4">\n\n    \n\n    <ion-item color="none"  on-click="goToOrder(order)" id="pendingOrders-list-item30" *ngFor="let order of res">\n\n      <ion-thumbnail item-left>\n\n        <!-- <img [src]="order.image"/> -->\n\n        <img src="assets/img/images.png"  />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Order ID: {{order.orderID}}\n\n      </h2>\n\n    </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\pending-orders\pending-orders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PendingOrdersPage);

//# sourceMappingURL=pending-orders.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDeliveriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery_delivery__ = __webpack_require__(199);
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
        selector: 'page-my-deliveries',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\my-deliveries\my-deliveries.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      My Deliveries\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n  <form id="myDeliveries-form3">\n\n    \n\n    <ion-item color="none" on-click="goToDelivery(deliver)" id="myDeliveries-list-item49" *ngFor="let deliver of res">\n\n      <ion-thumbnail item-left>\n\n        <!-- <img /> -->\n\n        <img src="assets/img/images.png"  />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Order ID: {{deliver.orderID}} \n\n      </h2>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\my-deliveries\my-deliveries.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MyDeliveriesPage);

//# sourceMappingURL=my-deliveries.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-delivery',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\delivery\delivery.html"*/'\n\n<ion-content>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Delivery\n\n      </ion-title>\n\n    </ion-navbar>\n\n  <div padding id="page10" *ngIf="items">\n\n      <button ion-button style="float:right" on-click="Deliver()" *ngIf="deliver">Deliver</button>\n\n    <ion-card id="order-card21"  *ngFor="let item of items">\n\n      <ion-list>\n\n        <ion-item color="none" id="order-list-item28">\n\n           Product Id: {{item.productID}}\n\n           <!-- {{item.product_photo}} -->\n\n        </ion-item>\n\n        <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n            <img [src]="item.product_photo"/>\n\n        </div>\n\n        <ion-list id="order-list5">\n\n          <ion-item color="none" id="order-list-item76">\n\n          <ion-icon name="calculator" item-start></ion-icon>\n\n           Quantity: {{item.qty}}\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-list>\n\n    </ion-card>\n\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\delivery\delivery.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DeliveryPage);

//# sourceMappingURL=delivery.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record_deposit_record_deposit__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculate_payment_calculate_payment__ = __webpack_require__(203);
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
        selector: 'page-my-payments',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\my-payments\my-payments.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Payments\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n  <div class="spacer" style="height:102px;" id="myPayments-spacer11"></div>\n\n  <button id="myPayments-button13" ion-button color="calm" block style="color:#000000;" on-click="goToCalculatePayment()">\n\n    Calculate Amount to be Deposited\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:42px;" id="myPayments-spacer13"></div>\n\n  <button id="myPayments-button14" ion-button color="calm" block style="color:#000000;" on-click="goToRecordDeposit()">\n\n    Record Payment made\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:103px;" id="myPayments-spacer12"></div>\n\n  <div>\n\n    <img src="assets/img/ynKQMmmQ1eii12NHRr6A_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\my-payments\my-payments.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], MyPaymentsPage);

//# sourceMappingURL=my-payments.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordDepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_deposit_slip_upload_deposit_slip__ = __webpack_require__(202);
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
        this.amount = "null";
        this.year = "null";
        this.month = "null";
        this.date = "null";
        var userID = localStorage.getItem('Agent_ID');
        this.http.post('http://localhost:8081/GZone/GettotalAmount.php?agentId=' + userID, "").subscribe(function (response) {
            var res = response.json();
            _this.amount = res[0].total_amount;
        });
    }
    RecordDepositPage.prototype.goToUploadDepositSlip = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__upload_deposit_slip_upload_deposit_slip__["a" /* UploadDepositSlipPage */]);
    };
    RecordDepositPage.prototype.addDeposit = function () {
        var _this = this;
        if (this.year == "null" || this.month == "null" || this.date == "null") {
            var alert_1 = this.Alert.create({ title: 'Error', subTitle: 'All fields must be filled', buttons: ['OK'] });
            alert_1.present();
        }
        else {
            this.http.post('http://localhost:8081/GZone/recordDeposit.php?year=' + this.year.trim() + '&month=' + this.month.trim() + '&date=' + this.date.trim(), "").subscribe(function (response) {
                console.log(response);
                if (response.statusText) {
                    var alert_2 = _this.Alert.create({ title: 'Success', subTitle: 'Successfull Added', buttons: ['OK'] });
                    alert_2.present();
                    _this.amount = "null";
                    _this.year = "null";
                    _this.month = "null";
                }
                else {
                    var alert_3 = _this.Alert.create({ title: 'Error', subTitle: 'Error Inserting values', buttons: ['OK'] });
                    alert_3.present();
                }
            });
            var userID = localStorage.getItem('Agent_ID');
            this.http.post('http://localhost:8081/GZone/mail/index.php?agentId=' + userID, "").subscribe(function (response) {
            });
        }
    };
    return RecordDepositPage;
}());
RecordDepositPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-record-deposit',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\record-deposit\record-deposit.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Record Deposit\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9">\n\n    <form id="recordDeposit-form6" method="POST">\n\n  <div id="recordDeposit-markdown7" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Deposit Date\n\n    </p>\n\n  </div>\n\n    <div class="spacer" style="width:300px;height:18px;" id="recordDeposit-spacer14"></div>\n\n    <ion-item id="recordDeposit-select2">\n\n      <ion-label>\n\n        Month\n\n      </ion-label>\n\n      <ion-select name="month" [(ngModel)]="month">\n\n        <ion-option>\n\n          January\n\n        </ion-option>\n\n        <ion-option>\n\n          February\n\n        </ion-option>\n\n        <ion-option>\n\n          March\n\n        </ion-option>\n\n        <ion-option>\n\n          April\n\n        </ion-option>\n\n        <ion-option>\n\n          May\n\n        </ion-option>\n\n        <ion-option>\n\n          June\n\n        </ion-option>\n\n        <ion-option>\n\n          July\n\n        </ion-option>\n\n        <ion-option>\n\n          August\n\n        </ion-option>\n\n        <ion-option>\n\n          September\n\n        </ion-option>\n\n        <ion-option>\n\n          October\n\n        </ion-option>\n\n        <ion-option>\n\n          November\n\n        </ion-option>\n\n        <ion-option>\n\n          December\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item id="recordDeposit-select3">\n\n      <ion-label>\n\n        Year\n\n      </ion-label>\n\n      <ion-select name="year" [(ngModel)]="year">\n\n        <ion-option>\n\n        2015\n\n        </ion-option>\n\n        <ion-option>\n\n        2016\n\n        </ion-option>\n\n        <ion-option>\n\n          2017\n\n        </ion-option>\n\n        <ion-option>\n\n          2018\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item id="recordDeposit-select3">\n\n      <ion-label>\n\n        Date\n\n      </ion-label>\n\n      <ion-select name="date" [(ngModel)]="date">\n\n        <ion-option>\n\n        1\n\n        </ion-option>\n\n        <ion-option>\n\n        2\n\n        </ion-option>\n\n        <ion-option>\n\n        3\n\n        </ion-option>\n\n        <ion-option>\n\n        4\n\n        </ion-option>\n\n        <ion-option>\n\n        5\n\n        </ion-option>\n\n        <ion-option>\n\n        6\n\n        </ion-option>\n\n        <ion-option>\n\n        7\n\n        </ion-option>\n\n        <ion-option>\n\n        8\n\n        </ion-option>\n\n        <ion-option>\n\n        9\n\n        </ion-option>\n\n        <ion-option>\n\n        10\n\n        </ion-option>\n\n        <ion-option>\n\n        11\n\n        </ion-option>\n\n        <ion-option>\n\n        12\n\n        </ion-option>\n\n        <ion-option>\n\n        13\n\n        </ion-option>\n\n        <ion-option>\n\n        14\n\n        </ion-option>\n\n        <ion-option>\n\n        15\n\n        </ion-option>\n\n        <ion-option>\n\n        16\n\n        </ion-option>\n\n        <ion-option>\n\n        17\n\n        </ion-option>\n\n        <ion-option>\n\n        18\n\n        </ion-option>\n\n        <ion-option>\n\n        19\n\n        </ion-option>\n\n        <ion-option>\n\n        20\n\n        </ion-option>\n\n        <ion-option>\n\n        21\n\n        </ion-option>\n\n        <ion-option>\n\n        22\n\n        </ion-option>\n\n        <ion-option>\n\n        23\n\n        </ion-option>\n\n        <ion-option>\n\n        24\n\n        </ion-option>\n\n        <ion-option>\n\n        25\n\n        </ion-option>\n\n        <ion-option>\n\n        26\n\n        </ion-option>\n\n        <ion-option>\n\n        27\n\n        </ion-option>\n\n        <ion-option>\n\n        28\n\n        </ion-option>\n\n        <ion-option>\n\n        29\n\n        </ion-option>\n\n        <ion-option>\n\n        30\n\n        </ion-option>\n\n        <ion-option>\n\n        31\n\n        </ion-option>\n\n        \n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  <div id="recordDeposit-markdown6" class="show-list-numbers-and-dots">\n\n    <p style="color:#000000;">\n\n      Amount Deposited (LKR)\n\n    </p>\n\n  </div>\n\n    <ion-item id="recordDeposit-input3">\n\n      <ion-input type="number" placeholder="Amount" name="amount" [(ngModel)]="amount"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n  <button ion-button color="calm" block style="color:#000000;" on-click="addDeposit()" >Submit</button>\n\n  <div class="spacer" style="width:300px;height:27px;" id="recordDeposit-spacer15"></div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\record-deposit\record-deposit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], RecordDepositPage);

//# sourceMappingURL=record-deposit.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDepositSlipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-upload-deposit-slip',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\upload-deposit-slip\upload-deposit-slip.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Upload Deposit Slip\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page13">\n\n  <div class="spacer" style="width:300px;height:84px;" id="uploadDepositSlip-spacer18"></div>\n\n  <ion-list id="uploadDepositSlip-list6">\n\n    <ion-item color="positive" id="uploadDepositSlip-list-item70">\n\n      <ion-icon name="cloud-upload" item-left></ion-icon>\n\n      Upload Image\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="spacer" style="width:300px;height:52px;" id="uploadDepositSlip-spacer19"></div>\n\n  <button id="uploadDepositSlip-button16" ion-button color="calm" block style="color:#000000;">\n\n    Submit\n\n  </button>\n\n  <div class="spacer" style="width:300px;height:123px;" id="uploadDepositSlip-spacer20"></div>\n\n  <div>\n\n    <img src="assets/img/6OiE3mQuGnVGOBw5GDVA_12342335_1674935559443552_4840384717682269278_n.png" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\upload-deposit-slip\upload-deposit-slip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], UploadDepositSlipPage);

//# sourceMappingURL=upload-deposit-slip.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatePaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        var userID = localStorage.getItem('Agent_ID');
        this.http.get('http://localhost:8081/GZone/updateAmount.php?agent_Id=' + userID + '&total=' + this.total).subscribe(function (response) {
            console.log(response);
        });
    };
    return CalculatePaymentPage;
}());
CalculatePaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calculate-payment',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\calculate-payment\calculate-payment.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Calculate Payment\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12">\n\n  <div id="calculatePayment-container1">\n\n    <div id="calculatePayment-markdown9" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Delivery Order Total (LKR)\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{total | number:\'1.2-2\'}}</ion-label>\n\n      </ion-item>\n\n    <div id="calculatePayment-markdown13" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        (-) Commission (LKR)\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{commision | number:\'1.2-2\'}}</ion-label>\n\n      </ion-item>\n\n      <div class="spacer" style="width:300px;height:68px;" id="calculatePayment-spacer16"></div>\n\n    <div id="calculatePayment-markdown12" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">\n\n        Amount to be Deposited\n\n      </p>\n\n    </div>\n\n      <ion-item>\n\n        <ion-label>{{deposit | number:\'1.2-2\'}}</ion-label>\n\n      </ion-item>\n\n      <button ion-button style="float:right" on-click="totalAmount()" *ngIf="deliver">Deliver</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\calculate-payment\calculate-payment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], CalculatePaymentPage);

//# sourceMappingURL=calculate-payment.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-my-profile',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\my-profile\my-profile.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      My Profile\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1" *ngIf="res">\n\n\n\n  <ion-card id="myProfile-card22">\n\n    <ion-list>\n\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n\n              <!-- <img [src]="res.profile_photo" *ngIf="res.profile_photo" style="display:block;width:100%;height:200;margin-left:auto;margin-right:auto;" /> -->\n\n              <img [src]="res.profile_photo" *ngIf="res.profile_photo" style="display:block;width:100%;height:200;margin-left:auto;margin-right:auto;" />\n\n            </div>\n\n\n\n        </ion-list>\n\n\n\n      \n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      {{res.fname}} {{res.lname}}\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-cog" item-start></ion-icon>\n\n      <strong>Username:  </strong>{{res.user_name}}\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-home" item-start></ion-icon>\n\n      {{res.address}} \n\n   </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-icon name="ios-recording" item-start></ion-icon>\n\n      {{res.tel_no}}\n\n     </ion-item>\n\n\n\n  </ion-list>\n\n    \n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\my-profile\my-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MyProfilePage);

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_profile_my_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_payments_my_payments__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_my_deliveries_my_deliveries__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_orders_my_orders__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_page_home_page__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_previous_purchases_previous_purchases__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pending_orders_pending_orders__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_record_deposit_record_deposit__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_order__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_delivery_delivery__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_calculate_payment_calculate_payment__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_upload_deposit_slip_upload_deposit_slip__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(193);
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
            __WEBPACK_IMPORTED_MODULE_16__pages_upload_deposit_slip_upload_deposit_slip__["a" /* UploadDepositSlipPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
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
            __WEBPACK_IMPORTED_MODULE_16__pages_upload_deposit_slip_upload_deposit_slip__["a" /* UploadDepositSlipPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\app\app.html"*/'<ion-menu [content]="mainContent">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Menu\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content id="side-menu21">\n\n    <div>\n\n      <img src="assets/img/9QAPDmx5QDGYgfQA1v9Q_12314128_1674935919443516_3250136307729642455_n.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </div>\n\n    <ion-list id="menu-list1">\n\n      <ion-item color="none" id="menu-list-item1">\n\n        My Orders\n\n      </ion-item>\n\n      <ion-item color="none" id="menu-list-item2">\n\n        My Deliveries\n\n      </ion-item>\n\n      <ion-item color="none" id="menu-list-item3">\n\n        My Payments\n\n      </ion-item>\n\n      <ion-item color="none" id="menu-list-item5">\n\n        View Profile\n\n      </ion-item>\n\n      <ion-item color="none" id="menu-list-item4">\n\n        Sign out\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_home_page__ = __webpack_require__(194);
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
                    var alert_2 = _this.Alert.create({ title: 'Success', subTitle: 'Login Successfull', buttons: ['OK'] });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'page-login',template:/*ion-inline-start:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n  <form (ngSubmit)="logForm()" id="login-form1" method="post" action="Login.php" onsubmit="">\n\n    <div>\n\n      <img src="assets/img/2ktNuGpvTE2ep0GsYvZ3_12314128_1674935919443516_3250136307729642455_n.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </div>\n\n    <div class="spacer" style="width:300px;height:26px;" id="login-spacer3"></div>\n\n    <ion-list id="login-list2">\n\n      <ion-item id="login-input1">\n\n      <i class="icon ion-home"></i>\n\n        <ion-label>\n\n          Username\n\n        </ion-label>\n\n        <ion-input type="text" name="username" [(ngModel)]="account.username" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="login-input2">\n\n        <ion-label>\n\n          Password\n\n        </ion-label>\n\n        <ion-icon name="logo-yen"></ion-icon>\n\n        <ion-input type="password" name="password" [(ngModel)]="account.password" placeholder=""></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n<button id="submit" ion-button color="stable" block on-click="goToHomePage()">\n\n    Log in\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rpa10\Desktop\Senda\MobileAppGZONETECHNOLOGIES\src\pages\login\login.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map