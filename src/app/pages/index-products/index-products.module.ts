import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexProductsPageRoutingModule } from './index-products-routing.module';

import { IndexProductsPage } from './index-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexProductsPageRoutingModule
  ],
  declarations: [IndexProductsPage]
})
export class IndexProductsPageModule {}
