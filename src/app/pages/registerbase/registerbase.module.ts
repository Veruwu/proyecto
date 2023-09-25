import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterbasePageRoutingModule } from './registerbase-routing.module';

import { RegisterbasePage } from './registerbase.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterbasePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RegisterbasePage]
})
export class RegisterbasePageModule {}
