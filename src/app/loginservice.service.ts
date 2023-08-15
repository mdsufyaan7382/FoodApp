import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Login} from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  userLoginUrl:string;
  http:HttpClient;
  constructor(http:HttpClient)  { 
    this.http = http;
    this.userLoginUrl = 'http://localhost:8080/login';
  }
  public Login(login: Login): Observable<User>{
    return this.http.post<User>(this.userLoginUrl,login);
  }  
}
