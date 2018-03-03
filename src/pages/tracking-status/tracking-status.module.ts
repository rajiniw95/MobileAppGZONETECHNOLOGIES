import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackingStatusPage } from './tracking-status';

@NgModule({
  declarations: [
    TrackingStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackingStatusPage),
  ],
})
export class TrackingStatusPageModule {}
