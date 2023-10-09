import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajedisPageRoutingModule } from './viajedis-routing.module';

import { ViajedisPage } from './viajedis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajedisPageRoutingModule
  ],
  declarations: [ViajedisPage]
})
export class ViajedisPageModule {}
