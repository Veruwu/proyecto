import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfildriverPage } from './perfildriver.page';

const routes: Routes = [
  {
    path: '',
    component: PerfildriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfildriverPageRoutingModule {}
