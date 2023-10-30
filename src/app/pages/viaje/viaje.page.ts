import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Viaje } from 'src/app/interfaces/conductor';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  viaje:Viaje={
    Desde:'',
    Hasta:''
  }

  Viaje: boolean;
  Recorrido: boolean;

  storageInitialized: boolean = false; 

  constructor(private storage:Storage) {
    this.Recorrido = false;
   }

  async ngOnInit() {
    if (!this.storageInitialized) {
      await this.storage.create();
      this.storageInitialized = true;
    }
    this.BuscarViaje()
  }

  async onSubmit(){
    await this.storage.set('viaje', this.viaje);
    this.Viaje = !this.Viaje;
  }

  async BuscarViaje() {
    const viaje = await this.storage.get('viaje');
    if (viaje) {
      this.Viaje = true;
      this.viaje.Desde=viaje.Desde;
      this.viaje.Hasta=viaje.Hasta;
      console.log("se encontraron viajes")
    } else {
      this.Viaje = false;
      console.log('No se encontraron los Viajes');
    }
  }

  CancelarViaje(){
    this.viaje.Desde='';
    this.viaje.Hasta='';
    this.Viaje = false;
    this.Recorrido = false
    this.storage.remove('viaje')
    console.log('se elimino el viaje')
  }

  IniciarViaje(){
    this.Recorrido = true;
    console.log('el viaje se inicio')
  }

  
}
