import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit() {
    this.navCtrl.navigateForward('/tab-inicial/viaje');
  }

}
