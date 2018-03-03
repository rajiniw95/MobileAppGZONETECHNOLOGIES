import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousClaimsPage } from './previous-claims';

@NgModule({
  declarations: [
    PreviousClaimsPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousClaimsPage),
  ],
})
export class PreviousClaimsPageModule {}
