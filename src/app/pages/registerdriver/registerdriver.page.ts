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


  async onSubmit() {
    if (this.conductor.password === this.repetirContrasena) {
      let conductores: Conductor[] = (await this.storage.get('conductores')) || [];
  
      conductores.push({
        nombre: this.conductor.nombre,
        apellido: this.conductor.apellido,
        fecha_nacimiento: this.conductor.fecha_nacimiento,
        email: this.conductor.email,
        password: this.conductor.password,
        tipo_auto: this.conductor.tipo_auto,
        matricula: this.conductor.matricula,
        asientos: this.conductor.asientos,
      });
  
      await this.storage.set('conductores', conductores);
      
      await this.obtenerUsuarios();
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>');
      console.log("USUARIO ACTUAL = ",this.conductor);

      let ext:NavigationExtras={
        state:{
          credenciales:this.conductor,
          saludo:"Hola mundo!!!"
        }
      }  

      this.router.navigate(['/tab-inicial/inicio-cliente', ext]);

    } else {
      console.log('Formulario inválido o las contraseñas no coinciden');
    }
  }

  async obtenerUsuarios() {
    const user = await this.storage.get('conductores');
    if (user) {
      console.log(user);
    } else {
      console.log('No se encontraron los USUARIOS PTM');
    }
  }

}
