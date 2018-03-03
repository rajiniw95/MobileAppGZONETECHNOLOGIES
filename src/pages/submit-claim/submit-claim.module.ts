import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitClaimPage } from './submit-claim';

@NgModule({
  declarations: [
    SubmitClaimPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitClaimPage),
  ],
})
export class SubmitClaimPageModule {}
