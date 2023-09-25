import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterdriverPageRoutingModule } from './registerdriver-routing.module';

import { RegisterdriverPage } from './registerdriver.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterdriverPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RegisterdriverPage]
})
export class RegisterdriverPageModule {}
