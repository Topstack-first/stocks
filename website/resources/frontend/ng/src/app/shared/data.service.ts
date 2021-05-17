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
  sendTransaction(data:any): Observable<any> {
    return this.http.post(config.API_BASE_URL+ '/api/transactions', data);
  }
}

