import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;
  goToWebAdmin:boolean = false;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }
  goToAdmin()
  {

    this.goToWebAdmin = ! this.goToWebAdmin;
  }
  ngOnInit() { }

  onSubmit() {
      this.authService.signin(this.loginForm.value).subscribe(
        result => {
          this.responseHandler(result);
        },
        error => {
          this.errors = error.error;
        },() => {
          this.authState.setAuthState(true);
          this.loginForm.reset();

          if(this.goToWebAdmin)
          {
            this.router.navigate(['webadmin']);
          }
          else{
            this.router.navigate(['stock']);
          }

        }
      );
  }

  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
    localStorage.setItem("id",data.user.id);
  }

}
