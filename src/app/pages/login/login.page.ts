import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';


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
  
    constructor(
      private router:Router,
      private alertController:AlertController,
      public formBuilder:FormBuilder,
      public loadingCtrl: LoadingController,
      public authService:AutheticationService,
      private toastController: ToastController
      ) { }
  
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
        this.router.navigate(['/tab-inicial/inicio-cliente'])
      }else{
        console.log("Ingrese valores correctos")
      }
    }
    }



    onSubmit()
    {
      // if (this.usuario.username=="wa@coldo.cl" && this.usuario.password=="123"){
      //   this.router.navigate(['/tab-inicial/inicio-cliente'])
      // }
      // else{
        
      //   this.presentAlert()
      // }
  
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
  
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Información',
        message: "Usuario y/o password incorrectos",
        buttons: ['OK'],
        backdropDismiss:false,
        
      });
      await alert.present();
    }
}