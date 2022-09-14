import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexContactPageRoutingModule } from './index-contact-routing.module';

import { IndexContactPage } from './index-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexContactPageRoutingModule
  ],
  declarations: [IndexContactPage]
})
export class IndexContactPageModule {}
