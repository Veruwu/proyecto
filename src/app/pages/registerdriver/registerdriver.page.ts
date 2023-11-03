import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Conductor } from 'src/app/interfaces/conductor';


@Component({
  selector: 'app-registerdriver',
  templateUrl: './registerdriver.page.html',
  styleUrls: ['./registerdriver.page.scss'],
})
export class RegisterdriverPage implements OnInit {

  conductor:Conductor={
    nombre:'',
    apellido:'',
    fecha_nacimiento: new Date(''),
    email:'',
    password:'',
    tipo_auto:'',
    matricula:'',
    asientos: 0
  };

  repetirContrasena: string = '';

  storageInitialized: boolean = false; 

  constructor(private router:Router, private storage:Storage) { }

  async ngOnInit() {
    if (!this.storageInitialized) {
      await this.storage.create();
      this.storageInitialized = true;
    }
  }


  async activar(valor:Number){
    await this.storage.set("sesion",valor);
    }

  async onSubmit() {
    if (this.conductor.password === this.repetirContrasena) {
  
      this.activar(1)
      await this.storage.set('conductor', this.conductor);
      
      await this.obtenerUsuarios();
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>');
      console.log("USUARIO ACTUAL = ",this.conductor); 

      this.router.navigate(['/tab-inicial/inicio-cliente']);

    } else {
      this.activar(0)
      console.log('Formulario inválido o las contraseñas no coinciden');
    }
  }

  async obtenerUsuarios() {
    const user = await this.storage.get('conductor');
    if (user) {
      console.log(user);
    } else {
      console.log('No se encontraron los USUARIOS PTM');
    }
  }

}
