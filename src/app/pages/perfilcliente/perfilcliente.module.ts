import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilclientePageRoutingModule } from './perfilcliente-routing.module';

import { PerfilclientePage } from './perfilcliente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilclientePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PerfilclientePage]
})
export class PerfilclientePageModule {}
