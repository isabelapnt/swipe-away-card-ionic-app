import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab1Page } from './tab1';

@NgModule({
  declarations: [
    Tab1Page,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(Tab1Page),
  ],
})
export class Tab1PageModule {}
