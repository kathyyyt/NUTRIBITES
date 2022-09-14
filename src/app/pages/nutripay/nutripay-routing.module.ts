import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutripayPage } from './nutripay.page';

const routes: Routes = [
  {
    path: '',
    component: NutripayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutripayPageRoutingModule {}
