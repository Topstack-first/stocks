import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    isSignedIn: boolean;

    constructor(
      private auth: AuthStateService,
      public router: Router,
      public token: TokenService,
    ) {
    }

    ngOnInit() {
      this.auth.userAuthState.subscribe(val => {
          this.isSignedIn = val;
          if(this.isSignedIn)
          {
              //this.router.navigate(["stock"]);
          }
      });
    }



  }
