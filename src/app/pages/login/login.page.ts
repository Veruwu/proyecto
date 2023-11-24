import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
import { Storage } from '@ionic/storage-angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Conductor } from 'src/app/interfaces/conductor';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logForm: FormGroup;

  usuario={
    username:'',
    password:''
   }

  rol: any
  //  conductor:Conductor={
  //   nombre:'',
  //   apellido:'',
  //   email:'',
  //   password:'',
  //   matricula:'',
  //   Id:'',
  //   perfil: 'conductor',
  // };
  
    constructor(
      private router:Router,
      private alertController:AlertController,
      public formBuilder:FormBuilder,
      public loadingCtrl: LoadingController,
      public authService:AutheticationService,
      private toastController: ToastController,
      private storage:Storage,
      private firestore: FirestoreService
      ) { 

      }
  
    ngOnInit() {
      this.logForm = this.formBuilder.group({
        email :['', [
          Validators.required,
          Validators.email,
          Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
        ]],
        password: ['', [
          Validators.required,
        ]]
      })


    }
    
    get errorControl(){
      return this.logForm?.controls;
    }
  
    async login(){
      const loading = await this.loadingCtrl.create();
      await loading.present();
    if (this.logForm?.valid){
      const user = await this.authService.loginUser(this.logForm.value.email, this.logForm.value.password).catch((error)=>{
        console.log(error);
        loading.dismiss()
      })

      if(user){
        loading.dismiss()
        const uid = user.user?.uid
        // console.log(uid)
        this.getDatosUser(uid)
        // if(this.rol == 'pasajero'){
        //   this.router.navigate(['/tab-inicial/inicio-cliente'])
        // }else if (this.rol ===''){
        //   this.router.navigate(['/tab-drive/inicio-cliente'])
        // }   
      }else{
        console.log("Ingrese valores correctos")
        const alert = await this.alertController.create({
          header: 'Alerta',
          message: "Usuario y/o password incorrectos",
          buttons: ['OK'],
          backdropDismiss:false,
          
        });
        await alert.present();
      }
    }
    }

    getDatosUser(uid:any){
      const path = "pasajero";
      const id = uid;
      this.firestore.getElDriver<Usuario>(path, id).subscribe(res =>{
        // console.log('datos -> ', res);
        if (res!= undefined){
          this.rol= res.perfil
          // console.log(this.rol)
          this.router.navigate(['/tab-inicial/inicio-cliente'])
        }else{
          this.router.navigate(['/tab-drive/inicio-cliente'])
        }

      })

    }

    async onSubmit(){
    //   const user = await this.storage.get('usuario');
    //   const driver = await this.storage.get('conductor');
    // if (user) {
    //   if (user.email == this.logForm.value.email && user.password == this.usuario.password){
    //     this.activar(1);
    //     console.log('login correcto :)');
    //     this.router.navigate(['/tab-inicial/inicio-cliente'])
    //   }else{
    //     this.activar(0);
    //    console.log('el email o contraseña es incorrecto');
    //   }
    // }else if(driver) {
    //   if (driver.email == this.usuario.username && driver.password == this.usuario.password){
    //     console.log('login correcto :)');
    //     this.activar(1);
    //     this.router.navigate(['/tab-inicial/inicio-cliente'])
    //   }else{
    //     this.activar(0);
    //    console.log('el email o contraseña es incorrecto');
    //   }
    // }else{
    //   this.activar(0);
    // console.log('No se encontraron los USUARIOS');
    // }
    }
  
    async activar(valor:Number){
    await this.storage.set("sesion",valor);
    }
    
    async presentToast(message: undefined) {
      console.log(message);
  
      const toast = await this.toastController.create({
        message: message,
        duration: 1500,
        position: 'top',
      });
  
      await toast.present();
    }
  
}