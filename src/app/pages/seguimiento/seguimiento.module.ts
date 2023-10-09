import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoPageRoutingModule } from './seguimiento-routing.module';

import { SeguimientoPage } from './seguimiento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SeguimientoPage]
})
export class SeguimientoPageModule {}
