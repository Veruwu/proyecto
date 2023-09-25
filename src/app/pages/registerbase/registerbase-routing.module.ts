import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterbasePage } from './registerbase.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterbasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterbasePageRoutingModule {}
