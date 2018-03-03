import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarrantyOrderListPage } from './warranty-order-list';

@NgModule({
  declarations: [
    WarrantyOrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(WarrantyOrderListPage),
  ],
})
export class WarrantyOrderListPageModule {}
