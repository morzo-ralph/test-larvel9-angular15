import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL:string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  getAllArticle(uri:string) {
    return this.http.get<any>(`${this.baseURL}/api/${uri}`);
  }
}
