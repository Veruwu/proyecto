import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterdriverPageRoutingModule } from './registerdriver-routing.module';

import { RegisterdriverPage } from './registerdriver.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicStorageModule } from '@ionic/storage-angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterdriverPageRoutingModule,
    ComponentsModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [RegisterdriverPage]
})
export class RegisterdriverPageModule {}
