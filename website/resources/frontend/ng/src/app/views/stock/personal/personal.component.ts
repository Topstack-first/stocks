import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalData } from './personal-data';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalData:PersonalData = {
    TipoCuenta:"GOLD",
    NumeroCenta:"CTE-10245678",
    image:'user.jpg',
    email:"sdjfj@gmail.com",
    password:""
  }
  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }
  solicitud()
  {
    this.router.navigate(["/solicitud"]);
  }
  editProfile(){
    this.router.navigate(["/profile"]);
  }
}
