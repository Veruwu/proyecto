import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {
  ionicForm: FormGroup;
  
  usuario:Usuario={
    nombre:'',
    apellido:'',
    email:'',
    password:''
  }

  repetirContrasena: string = '';

  storageInitialized: boolean = false; 



  constructor(private router:Router, private storage:Storage, public formBuilder:FormBuilder,
    public loadingCtrl: LoadingController,
    public authService:AutheticationService,
    
    ) {this.ionicForm}

  async ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      nombre :['', [Validators.required]],
      apellido :['', [Validators.required]],
      email :['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]],
      password: ['', [
        Validators.required,
      ]]
    })


    if (!this.storageInitialized) {
      await this.storage.create();
      this.storageInitialized = true;
    }
  }

  get errorControl(){
    return this.ionicForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.ionicForm?.valid){
      const user = await this.authService.registerUser(this.ionicForm.value.email, this.ionicForm.value.password).catch((error)=>{
        console.log(error);
        loading.dismiss()
      })

      if(user){
        loading.dismiss()
        this.router.navigate(['/tab-inicial/inicio-cliente'])
      }else{
        console.log("Ingrese valores correctos")
      }
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

      // this.router.navigate(['/tab-inicial/inicio-cliente'])


    } else {
      console.log('Formulario inválido o las contraseñas no coinciden');
    }
}

async obtenerUsuarios() {
  const user = await this.storage.get('usuarios');
  if (user) {
    console.log(user);
  } else {
    console.log('No se encontraron los USUARIOS');
  }
}


}