import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerbase',
  templateUrl: './registerbase.page.html',
  styleUrls: ['./registerbase.page.scss'],
})
export class RegisterbasePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onClick(ruta:string){
    this.router.navigate(['/'+ruta])
  }
}
