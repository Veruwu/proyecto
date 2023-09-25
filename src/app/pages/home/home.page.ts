import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario={
    username:'',
    password:''
   }

  constructor(private router:Router) {}

  onClick(ruta:string){
    this.router.navigate(['/'+ruta])
  }
}
