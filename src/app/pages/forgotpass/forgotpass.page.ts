import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from 'src/app/authetication.service';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  resetForm : FormGroup
  email:any;


  constructor(public authService:AutheticationService, private router:Router, private toastController: ToastController, public formBuilder:FormBuilder) { }

  async ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email :['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]],
    })  
  }
  
  get errorControl(){
    return this.resetForm?.controls;
  }
  onSubmit(){
    
  }

  async resetpassword(){
    this.authService.resetPassword(this.email).then( () =>{      
      console.log('reset email sent'); //show confirmation dialog
      this.presentToast()
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'El link para cambiar tu contraseña ya ha sido enviado',
      duration: 2000, // Duration in milliseconds
      position: 'middle' // Position of the toast (top, bottom, middle)
    });
  
    toast.present();
    toast.onDidDismiss().then(()=>{
      this.router.navigate(['/login']);
    })
  }
}
