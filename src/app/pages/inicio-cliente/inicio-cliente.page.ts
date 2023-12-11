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
  uid:any
  Nombre2: any;
  Apellido2: any;
  Fullname:any;

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

  async ngOnInit() {
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
        this.uid = res.uid
        const email = res.email
        const path = 'pasajero'
        const path2 = 'conductor'
          this.ngFireAuth.obtenerNombreUsuario(path,this.uid).subscribe((datopasajero:any) =>{
            this.Nombre = datopasajero.nombre
            this.Apellido = datopasajero.apellido
            if (this.Nombre !== undefined){
              this.Fullname = this.Nombre + " " + this.Apellido;
            }else{
              this.Fullname = this.Nombre2 + " " + this.Apellido2;
            }
            console.log('Nombre del usuario:', datopasajero.nombre);
          })
          this.ngFireAuth.obtenerNombreUsuario(path2,this.uid).subscribe((datodriver:any) =>{
            this.Nombre2 = datodriver.nombre
            this.Apellido2 = datodriver.apellido
            if (this.Nombre !== undefined){
              this.Fullname = this.Nombre + " " + this.Apellido;
            }else{
              this.Fullname = this.Nombre2 + " " + this.Apellido2;
            }
            console.log('Nombre del usuario:', datodriver.nombre);
          })
          
      }
      // if (this.Nombre !== undefined){
      //   this.Fullname = this.Nombre + " " + this.Apellido;
      // }
    })

    // try {
    //   // Aquí debes tener el uid del usuario actual, por ejemplo, desde AngularFireAuth
      

    //   // Obtener datos del usuario desde la colección "usuarios"
    //   const datosUsuario = await this.ngFireAuth.obtenerNombreYApellido(this.uid);

    //   this.Nombre = datosUsuario.nombre;
    //   this.Apellido = datosUsuario.apellido;
    // } catch (error) {
    //   console.log('Error al obtener los datos del usuario:', error);
    // }
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
