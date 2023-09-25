import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['/tab-inicial/inicio-cliente'])
  }


}
