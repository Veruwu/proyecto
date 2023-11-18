import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AutheticationService } from 'src/app/authetication.service';
import { Conductor } from 'src/app/interfaces/conductor';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-registerdriver',
  templateUrl: './registerdriver.page.html',
  styleUrls: ['./registerdriver.page.scss'],
})
export class RegisterdriverPage implements OnInit {
  ionicForm: FormGroup;
  
  conductor:Conductor={
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    matricula:'',
    Id:'',
  };

  repetirContrasena: string = '';

  storageInitialized: boolean = false; 

  constructor(private router:Router, private storage:Storage, private services:FirestoreService,public formBuilder:FormBuilder,
    public loadingCtrl: LoadingController,
    public authService:AutheticationService,) {
      if (!this.storageInitialized) {
        this.storage.create();
        this.storageInitialized = true;
      }
     }

  async ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      nombre :['', [Validators.required]],
      apellido :['', [Validators.required]],
      matricula :['', [Validators.required]],
      email :['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]],
      password: ['', [
        Validators.required,
      ]],
    })

    // if (!this.storageInitialized) {
    //   await this.storage.create();
    //   this.storageInitialized = true;
    // }
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
        this.activar(1)
        loading.dismiss()
        this.router.navigate(['/tab-drive/inicio-cliente'])
      }else{
        this.activar(0)
        console.log("Ingrese valores correctos")
      }
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

      const id = this.services.getId();
      this.conductor.Id = id;
      const response = await this.services.creatDriver(this.conductor, id);
     
      console.log(id)
      // this.router.navigate(['/tab-inicial/inicio-cliente']);

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
