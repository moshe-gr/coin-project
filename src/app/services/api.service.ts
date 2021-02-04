import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private coinApi = "https://api.coingecko.com/api/v3/coins"

  constructor(private httpClient: HttpClient) {   }
  get(): Observable<any>{
    return this.httpClient.get(this.coinApi);
  }
  getInfo(id): Observable<any>{
    return this.httpClient.get(this.coinApi+'/'+id);
  }
}