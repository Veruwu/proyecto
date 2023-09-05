import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginuserPage } from './loginuser.page';

const routes: Routes = [
  {
    path: '',
    component: LoginuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginuserPageRoutingModule {}
