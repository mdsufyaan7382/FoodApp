import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Admin} from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
   adminLoginUrl:string;



   http:HttpClient;

  constructor(http:HttpClient)  { 
    this.http = http;

      this.adminLoginUrl = 'http://localhost:8080/adminlogin';
  }
  public adminLogin(admin: Admin): Observable<boolean>{
  return this.http.post<boolean>(this.adminLoginUrl,admin);
}
}
