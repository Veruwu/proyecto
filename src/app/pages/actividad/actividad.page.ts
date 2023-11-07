import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {

  mostrar: boolean;
  
  Datos: any[];
  Desde:string;
  Hasta:string;

  constructor(private storage:Storage,private navCtrl:NavController, private services:FirestoreService) { }

  ngOnInit() {
    this.obtenerViaje() 
  }


  async obtenerViaje() {
    const viaje = await this.storage.get('viaje');
    const obtviaje = this.services.obtData().subscribe((data:any)=>{
      this.Datos = data;})
    if (viaje) {
      this.mostrar = true;
      this.Desde = viaje.Desde;
      this.Hasta = viaje.Hasta;
      
      console.log("se encontraron viajes")
    } 
    else if (obtviaje){
      this.mostrar = true;
      console.log("se encontraron viajes xd")
      console.log(obtviaje)
    }
    else {
      this.mostrar = false;
      console.log('No se encontraron los Viajes');
    }
  }

  onClick(){
    this.navCtrl.navigateForward('/tab-inicial/viaje');
  }

  obtenerDatos(){
    this.services.obtData().subscribe((data:any)=>{
      this.Datos = data;
      console.log(data)
    })
  }
}
