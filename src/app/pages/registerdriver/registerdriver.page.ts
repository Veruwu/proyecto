import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerdriver',
  templateUrl: './registerdriver.page.html',
  styleUrls: ['./registerdriver.page.scss'],
})
export class RegisterdriverPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['/tab-inicial/inicio-cliente'])
  }


}
