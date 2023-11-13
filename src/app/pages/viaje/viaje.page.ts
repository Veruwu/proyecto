import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Viaje } from 'src/app/interfaces/conductor';
import { FirestoreService } from 'src/app/services/firestore.service';



@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  viaje:Viaje={
    Desde:'',
    Hasta:'',
    Asientos: null,
    Valor: null,
    Id:'',
  }

  Viaje: boolean;
  Recorrido: boolean;
  sumasientos: any = null;

  storageInitialized: boolean = false; 

  constructor(private storage:Storage, private services:FirestoreService, private router: Router) {
    this.Recorrido = false;
    this.sumasientos = this.router.getCurrentNavigation()?.extras?.state;
    console.log(this.sumasientos);
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

    const id = this.services.getId();
    this.viaje.Id = id;
    const response = await this.services.creatDoc(this.viaje, id);
   
    console.log(id)
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
    this.viaje.Asientos=null;
    this.viaje.Valor=null;
    this.Viaje = false;
    this.Recorrido = false
    this.storage.remove('viaje')
    console.log('se elimino el viaje')
    this.services.deleteDoc(this.viaje, this.viaje.Id)
  }

  IniciarViaje(){
    this.Recorrido = true;
    console.log('el viaje se inicio')
  }

  
}
