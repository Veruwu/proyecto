import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpassPageRoutingModule } from './forgotpass-routing.module';

import { ForgotpassPage } from './forgotpass.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpassPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ForgotpassPage]
})
export class ForgotpassPageModule {}
