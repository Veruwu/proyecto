import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleViajePageRoutingModule } from './detalle-viaje-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetalleViajePage } from './detalle-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleViajePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DetalleViajePage]
})
export class DetalleViajePageModule {}
