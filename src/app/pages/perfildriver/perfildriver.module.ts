import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfildriverPageRoutingModule } from './perfildriver-routing.module';

import { PerfildriverPage } from './perfildriver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfildriverPageRoutingModule
  ],
  declarations: [PerfildriverPage]
})
export class PerfildriverPageModule {}
