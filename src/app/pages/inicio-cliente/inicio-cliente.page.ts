import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

    nombre:string;

  constructor(private navCtrl: NavController,private storage:Storage) {
    
  }

  ngOnInit() {
    this.obtenerUsuario()
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
