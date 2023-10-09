import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajedisPage } from './viajedis.page';

const routes: Routes = [
  {
    path: '',
    component: ViajedisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajedisPageRoutingModule {}
