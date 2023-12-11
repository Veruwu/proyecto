import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AutheticationService } from 'src/app/authetication.service';


@Component({
  selector: 'app-perfilcliente',
  templateUrl: './perfilcliente.page.html',
  styleUrls: ['./perfilcliente.page.scss'],
})
export class PerfilclientePage implements OnInit {

  nombre:string;
  Nombre: any;
  Apellido: any;

  constructor(private router:Router, public authService: AutheticationService,private storage:Storage) { 

    this.authService.stateUser().subscribe(res =>{
      if (res){
        const uid = res.uid
        const email = res.email
        console.log(uid)
        console.log(email)
        this.nombre = email || ""
      }
    })
  }


  async logout(){
    this.authService.signOut().then(()=>{
      this.router.navigate(['/home'])
    })
  }

  ngOnInit() {
    this.obtenerUsuario()
    this.authService.stateUser().subscribe(res =>{
      if (res){
        const uid = res.uid
        const email = res.email
        const path = 'pasajero'
          this.authService.obtenerNombreUsuario(path,uid).subscribe((datosusuario:any) =>{
            this.Nombre = datosusuario.nombre
            this.Apellido = datosusuario.apellido
            console.log('Nombre del usuario:', datosusuario.nombre);
          })
      }
    })
    
  }

  onClick(ruta:string){
    this.router.navigate(['/'+ruta])
  }
  
    isModalOpen = false;
    isModalOpen2 = false;
    isModalOpen3 = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
}

  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }


public alertButtons = [
  {
    text: 'No',
    cssClass: 'alert-button-cancel',
    role: 'cancel',
  },
  {
    text: 'Yes',
    cssClass: 'alert-button-confirm',
    role: 'confirm',
    
  },
];
setResult(ev:any) {
  if(ev.detail.role == 'confirm'){
    this.authService.signOut().then(()=>{
      this.router.navigate(['/home'])
      this.activar(0)
      console.log(`Dismissed with role: ${ev.detail.role}`);
    })

  }
  else{
    console.log(`No funcionó :c`);
  }
  
}

setResult2(ev:any) {
  if(ev.detail.role == 'confirm'){
    this.authService.signOut().then(()=>{
      this.router.navigate(['/tab-drive/inicio-cliente'])
      this.activar(0)
      console.log(`Dismissed with role: ${ev.detail.role}`);
    })

  }
  else{
    console.log(`No funcionó :c`);
  }
  
}

async activar(valor:Number){
  await this.storage.set("sesion",valor);
  }

  async obtenerUsuario() {
    const user = await this.storage.get('usuario');
    const driver = await this.storage.get('conductor');
    if (user) {
      this.storage.remove('conductor')
      this.nombre = user.nombre + " " + user.apellido;
    }else if (driver) {
      this.storage.remove('usuario')
      this.nombre = driver.nombre + " " + driver.apellido;
    }else{
      console.log('no se encontraron usuarios ni conductores')
    }
  }

}