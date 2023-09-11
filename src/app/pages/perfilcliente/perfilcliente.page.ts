import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilcliente',
  templateUrl: './perfilcliente.page.html',
  styleUrls: ['./perfilcliente.page.scss'],
})
export class PerfilclientePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(ruta:string){
    this.router.navigate(['/'+ruta])
  }
}
