import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL:string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  get(uri: string) {
    return this.http.get<any>(`${this.baseURL}/api/${uri}`);
  }

  store(uri: string, payload: object) {
    return this.http.post<any>(`${this.baseURL}/api/${uri}`, payload);
  }

  put(uri: string, payload: object) {
    return this.http.put<any>(`${this.baseURL}/api/${uri}`, payload);
  }

  patch(uri: string, payload: object) {
    return this.http.patch<any>(`${this.baseURL}/api/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.baseURL}/api/${uri}`);
  }

}
