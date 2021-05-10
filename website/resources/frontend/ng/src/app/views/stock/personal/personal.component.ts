import { Component, OnInit } from '@angular/core';
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
    image:'assets/img/users/user.jpg',
    email:"sdjfj@gmail.com",
    password:""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
