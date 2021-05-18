import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  // get invester data
  getInvester(id:any): Observable<any> {
    return this.http.get(config.API_BASE_URL+ '/api/investers/'+id);
  }
  getBriefcases(): Observable<any> {
    return this.http.get(config.API_BASE_URL+ '/api/briefcases');
  }
  sendTransaction(data:any): Observable<any> {
    return this.http.post(config.API_BASE_URL+ '/api/transactions', data);
  }
  postUser(data:any): Observable<any> {
    return this.http.post(config.API_BASE_URL+ '/api/investers', data);
  }
  postBriefcase(data:any): Observable<any> {
    return this.http.post(config.API_BASE_URL+ '/api/briefcases', data);
  }
  postTransaction(data:any): Observable<any> {
    return this.http.post(config.API_BASE_URL+ '/api/transactions', data);
  }
}

