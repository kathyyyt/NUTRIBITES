import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutripayPageRoutingModule } from './nutripay-routing.module';

import { NutripayPage } from './nutripay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutripayPageRoutingModule
  ],
  declarations: [NutripayPage]
})
export class NutripayPageModule {}
