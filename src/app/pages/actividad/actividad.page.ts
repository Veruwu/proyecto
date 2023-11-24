import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Viaje } from 'src/app/interfaces/conductor';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DetalleViajePage } from '../detalle-viaje/detalle-viaje.page';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {
  public sumasientos = 0;
  mostrar: boolean;
  
  viajes: any[];

  Datos: any[];
  Desde:string;
  Hasta:string;
  viaje:Viaje={
    Desde:'',
    Hasta:'',
    Asientos: null,
    Valor: null,
    Id:'',
  }
  constructor(private storage:Storage,private navCtrl:NavController, private services:FirestoreService, private firestore:AngularFirestore,) { 
      this.services.obtData().subscribe((data:any)=>{
      this.viaje = data;
    });
    console.log(this.viajes)
  }

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
    this.sumasientos++;
    let dato ={datos:this.sumasientos}
    this.navCtrl.navigateForward('/tab-inicial/viaje', { state: {dato} })
  }

  obtenerDatos(){
    this.services.obtData().subscribe((data:any)=>{
      this.Datos = data;
      console.log(data)
    })
  }

  async Viajeseleccionado(viaje:Viaje){
    console.log('viaje ->', viaje)
    console.log('viaje ->', viaje.Id)

      this.navCtrl.navigateForward('/detalle-viaje', {
        state: { viaje:viaje.Id }
      
    });

    // if (viaje) {
    //   this.navCtrl.navigateForward('/detalle-viaje', {
    //     state: { viaje }
    //   });
    // } else {
    //   console.log("El objeto 'viaje' es nulo o indefinido.");
    // }


    // this.services.obtDataid(viaje).subscribe((data:any)=>{
    //   this.Datos = data;
    //   console.log(data)
    // })
      // this.navCtrl.navigateForward('/detalle-viaje');

}

obtenerDatos2(viaje:Viaje){
  const path = 'viaje'
  this.services.obtDataid(path, viaje.Id).subscribe((data:any)=>{
    this.Datos = data;
    console.log(data)
  })
}


mostrarviajecito(viaje:Viaje){
  // console.log('el item :c', viaje)
  this.services.mostrarViaje(viaje);

}
}