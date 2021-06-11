import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseApiUrl: string = "";
  constructor(private http: HttpClient) { 
  }
  get(relativeUrl: string) {
    let url = relativeUrl;
    return this.http.get<any>(url)
  ;
  }
}
