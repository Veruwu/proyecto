import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginuserPageRoutingModule } from './loginuser-routing.module';

import { LoginuserPage } from './loginuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginuserPageRoutingModule
  ],
  declarations: [LoginuserPage]
})
export class LoginuserPageModule {}
