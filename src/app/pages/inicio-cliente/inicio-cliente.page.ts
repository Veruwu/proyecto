import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  isModalOpen = false;
  isModalOpen2 = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }

  onSearchChange(event:string){

  }

  onSubmit(){
    this.setOpen2(false);
    this.router.navigate(['/tab-inicial/viaje']);
  }

  onClick(ruta:string){
    this.router.navigate(['/'+ruta])
  }
}
