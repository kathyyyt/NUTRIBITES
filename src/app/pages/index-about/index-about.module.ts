import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexAboutPageRoutingModule } from './index-about-routing.module';

import { IndexAboutPage } from './index-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexAboutPageRoutingModule
  ],
  declarations: [IndexAboutPage]
})
export class IndexAboutPageModule {}
