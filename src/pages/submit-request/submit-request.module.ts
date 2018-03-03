import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitRequestPage } from './submit-request';

@NgModule({
  declarations: [
    SubmitRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitRequestPage),
  ],
})
export class SubmitRequestPageModule {}
