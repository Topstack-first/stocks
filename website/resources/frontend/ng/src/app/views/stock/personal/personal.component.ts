import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { TokenService } from 'src/app/shared/token.service';
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
  constructor(private router:Router,
    private auth: AuthStateService,
      public token: TokenService,) {

   }

  ngOnInit(): void {
  }
  solicitud()
  {
    this.router.navigate(["/stock/solicitud"]);
  }
  editProfile(){
    this.router.navigate(["/stock/profile"]);
  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['']);
  }
}
