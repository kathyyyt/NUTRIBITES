import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexAboutPage } from './index-about.page';

const routes: Routes = [
  {
    path: '',
    component: IndexAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexAboutPageRoutingModule {}
