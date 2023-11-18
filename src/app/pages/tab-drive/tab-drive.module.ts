import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabDrivePageRoutingModule } from './tab-drive-routing.module';

import { TabDrivePage } from './tab-drive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabDrivePageRoutingModule
  ],
  declarations: [TabDrivePage]
})
export class TabDrivePageModule {}
