import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {

  mostrar: boolean;

  Desde:string;
  Hasta:string;

  constructor(private storage:Storage,private navCtrl:NavController) { }

  ngOnInit() {
    this.obtenerViaje() 
  }


  async obtenerViaje() {
    const viaje = await this.storage.get('viaje');
    if (viaje) {
      this.mostrar = true;
      this.Desde = viaje.Desde;
      this.Hasta = viaje.Hasta;
      console.log("se encontraron viajes")
    } else {
      this.mostrar = false;
      console.log('No se encontraron los Viajes');
    }
  }

  onClick(){
    this.navCtrl.navigateForward('/tab-inicial/viaje');
  }
}
