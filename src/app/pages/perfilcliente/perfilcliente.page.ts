import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-perfilcliente',
  templateUrl: './perfilcliente.page.html',
  styleUrls: ['./perfilcliente.page.scss'],
})
export class PerfilclientePage implements OnInit {

  constructor(private router:Router, public authService: AutheticationService) { }


  async logout(){
    this.authService.signOut().then(()=>{
      this.router.navigate(['/home'])
    })
  }

  ngOnInit() {
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
      console.log(`Dismissed with role: ${ev.detail.role}`);
    })

  }
  else{
    console.log(`No funcionó :c`);
  }
  
}

}