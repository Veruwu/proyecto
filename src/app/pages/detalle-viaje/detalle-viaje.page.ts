import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Viaje } from '../../interfaces/conductor';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Usuario } from '../../interfaces/usuario';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
  providers: [NavParams],
})
export class DetalleViajePage implements OnInit {
  confirmado: boolean = false;


    
  viajaso:Viaje={
    Desde:'',
    Hasta:'',
    Asientos: '',
    Valor: '',
    Id:'',
  }
  Nombre:any;
  Apellido:any;
  Hasta:string;
  asientos:number;
  valor:number;
  Datos: any[];
  contador:number;
  uid:'';
  items: Observable<any[]>;

  constructor(
    public services:FirestoreService, 
    public firestore:AngularFirestore, 
    public router:Router, 
    public navParams: NavParams, 
    public authService: AutheticationService,
    ) { 

    // this.data = this.navParams.get('viaje');
    // console.log('F en el shat '+this.data)
    const viajito = this.services.pasarViaje()
    console.log('se muestra el viaje', viajito)
    if (viajito !== undefined){
      this.viajaso = viajito
      
    }
    
    
  }

  ngOnInit() {

    this.authService.stateUser().subscribe(res =>{
      if (res){
        const uid = res.uid
        const email = res.email
          this.authService.obtenerNombreUsuario(uid).subscribe((datosusuario:any) =>{
            this.Nombre = datosusuario.nombre
            this.Apellido = datosusuario.apellido
            console.log('Nombre del usuario:', datosusuario.nombre);
          })
      }
    })


    this.obtenerDatos()
    // this.viaje = this.navParams.get('viaje');

    // console.log('F en el shat '+this.viaje)

    // const state = this.router.getCurrentNavigation().extras.state;
    // if (state && state['viaje']) {
    //   this.viaje = state['viaje'];
    //   console.log('Viaje recibido:', this.viaje );
    // } else {
    //   console.log('No se encontró un objeto de viaje en el estado.');
    // }
  }

  async onClick(ruta:string) {
    this.router.navigate(['/'+ruta])
    if(this.viajaso.Asientos! > 0){
      this.viajaso.Asientos-- 
      this.confirmado = true;
    }

    this.authService.tomarViaje(this.viajaso.Id, this.Nombre)

  }


  obtenerDatos(){
    this.services.obtData().subscribe((data:any)=>{
      this.Datos = data;
      // console.log(data)
      // console.log(this.viaje.Id)

    })
  }
  onSubmit(){}



  
}
