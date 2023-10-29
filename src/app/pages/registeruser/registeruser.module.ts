import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteruserPageRoutingModule } from './registeruser-routing.module';

import { RegisteruserPage } from './registeruser.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteruserPageRoutingModule,
    ComponentsModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [RegisteruserPage]
})
export class RegisteruserPageModule {}
