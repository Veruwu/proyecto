import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilcliente',
  templateUrl: './perfilcliente.page.html',
  styleUrls: ['./perfilcliente.page.scss'],
})
export class PerfilclientePage implements OnInit {

  constructor(private router:Router) { }

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

features: any[] = [
  {id: 1, name: 'Agregar tarjeta', src: 'assets/icons/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  {id: 2, name: 'Cupones', src: 'assets/icons/cash-withdrawal.png', background: 'rgba(106,100,255, 0.1)', page: ''},

];

transactions: any[] = [
  {id: 1, vendor: 'PhonePe', image: '', amount: 1500, time: '3:00PM'},
  {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
];

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
    this.router.navigate(['/home'])
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  else{
    console.log(`No funcionó :c`);
  }
  
}

}