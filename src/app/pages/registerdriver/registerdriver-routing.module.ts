import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterdriverPage } from './registerdriver.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterdriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterdriverPageRoutingModule {}
