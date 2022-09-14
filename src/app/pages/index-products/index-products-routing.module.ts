import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexProductsPage } from './index-products.page';

const routes: Routes = [
  {
    path: '',
    component: IndexProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexProductsPageRoutingModule {}
