import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
@Injectable()
export class pendingOrder {
    constructor(private http: Http){
        this.http.get('http://localhost/GZone/pending-order.php').subscribe(data => {
            console.log(data);
          });
    }
}