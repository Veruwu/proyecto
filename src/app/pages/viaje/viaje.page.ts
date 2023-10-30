import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {


  Desde:'';
  Hasta:'';


  Viaje: boolean;

  Recorrido: boolean;

  constructor() {
    this.Viaje = false;
    this.Recorrido = false;
   }

  ngOnInit() {
  }

  onSubmit(){
    this.Viaje = !this.Viaje;
  }

  IniciarViaje(){
    this.Recorrido = !this.Recorrido
  }

  Terminar(){
    this.Viaje = !this.Viaje;
    this.Recorrido = !this.Recorrido
  }
}
