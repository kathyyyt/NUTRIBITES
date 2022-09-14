import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexContactPage } from './index-contact.page';

const routes: Routes = [
  {
    path: '',
    component: IndexContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexContactPageRoutingModule {}
