import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {

  usuario:Usuario={
    nombre:'',
    apellido:'',
    email:'',
    password:''
  }

  repetirContrasena: string = '';

  storageInitialized: boolean = false; 

  constructor(private router:Router, private storage:Storage) { }

  async ngOnInit() {
    if (!this.storageInitialized) {
      await this.storage.create();
      this.storageInitialized = true;
    }
  }

  async onSubmit(){
    if (this.usuario.password === this.repetirContrasena) {
      let Usuarios: Usuario[] = (await this.storage.get('usuarios')) || [];

      Usuarios.push({
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        email: this.usuario.email,
        password: this.usuario.password,
      });

      await this.storage.set('usuarios', Usuarios);

      await this.obtenerUsuarios();
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>');
      console.log("USUARIO ACTUAL = ",this.usuario);

      this.router.navigate(['/tab-inicial/inicio-cliente'])


    } else {
      console.log('Formulario inválido o las contraseñas no coinciden');
    }
}

async obtenerUsuarios() {
  const user = await this.storage.get('usuarios');
  if (user) {
    console.log(user);
  } else {
    console.log('No se encontraron los USUARIOS PTM');
  }
}


}