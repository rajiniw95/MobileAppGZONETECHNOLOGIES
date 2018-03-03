import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarrantyDetailsPage } from './warranty-details';

@NgModule({
  declarations: [
    WarrantyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WarrantyDetailsPage),
  ],
})
export class WarrantyDetailsPageModule {}
