import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackingStatusListPage } from './tracking-status-list';

@NgModule({
  declarations: [
    TrackingStatusListPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackingStatusListPage),
  ],
})
export class TrackingStatusListPageModule {}
