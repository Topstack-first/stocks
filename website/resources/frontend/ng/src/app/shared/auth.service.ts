import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {config} from './config'
// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(config.API_BASE_URL+ '/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(config.API_BASE_URL+ '/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(config.API_BASE_URL+ '/api/auth/user-profile');
  }

}

