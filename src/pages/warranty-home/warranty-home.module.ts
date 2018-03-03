import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarrantyHomePage } from './warranty-home';

@NgModule({
  declarations: [
    WarrantyHomePage,
  ],
  imports: [
    IonicPageModule.forChild(WarrantyHomePage),
  ],
})
export class WarrantyHomePageModule {}
