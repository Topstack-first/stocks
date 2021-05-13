import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  // get invester data
  getInvester(id:any): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/investers/'+id);
  }
  sendTransaction(data:any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/transactions', data);
  }
}

