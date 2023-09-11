import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilclientePage } from './perfilcliente.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilclientePageRoutingModule {}
