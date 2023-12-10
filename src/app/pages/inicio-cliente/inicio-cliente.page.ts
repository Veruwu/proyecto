import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AutheticationService } from 'src/app/authetication.service';



@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  nombre:string;
  Nombre: any;
  Apellido: any;

  constructor(
    private navCtrl: NavController,
    private storage:Storage, 
    private ngFireAuth: AutheticationService,
    private afAuth: AngularFireAuth
    ) {

    this.ngFireAuth.stateUser().subscribe(res =>{
      if (res){
        const uid = res.uid
        const email = res.email
        console.log(uid)
        console.log(email)
        this.nombre = email || ""
      }
    })
  }

  ngOnInit() {
    this.obtenerUsuario()
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // El usuario ha iniciado sesión, y puedes acceder a su información aquí
        console.log('Usuario actual:', user.uid);
      } else {
        // El usuario no ha iniciado sesión
      }
    });

    this.ngFireAuth.stateUser().subscribe(res =>{
      if (res){
        const uid = res.uid
        const email = res.email
          this.ngFireAuth.obtenerNombreUsuario(uid).subscribe((datosusuario:any) =>{
            this.Nombre = datosusuario.nombre
            this.Apellido = datosusuario.apellido
            console.log('Nombre del usuario:', datosusuario.nombre);
          })
      }
    })
  }

  onSubmit(lugar:boolean) {
    if (lugar == true){
      this.navCtrl.navigateForward('/tab-inicial/viaje');
    }else{
      this.navCtrl.navigateForward('/tab-inicial/actividad');
    }
    
  }

  async obtenerUsuario() {
    const user = await this.storage.get('usuario');
    const driver = await this.storage.get('conductor');
    if (user) {
      this.storage.remove('conductor')
      this.nombre = user.nombre + " " + user.apellido;
    }else if (driver) {
      this.storage.remove('usuario')
      this.nombre = driver.nombre + " " + driver.apellido;
    }else{
      console.log('no se encontraron usuarios ni conductores')
    }
  }


}
