import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PasswordComponent } from './password/password.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [EncabezadoComponent, PasswordComponent],
  exports:[EncabezadoComponent, PasswordComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }