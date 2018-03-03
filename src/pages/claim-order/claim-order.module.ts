import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimOrderPage } from './claim-order';

@NgModule({
  declarations: [
    ClaimOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimOrderPage),
  ],
})
export class ClaimOrderPageModule {}
