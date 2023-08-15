import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Login} from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  // userLoginUrl:string;
  signUpUrl : string;
  deleteUserUrl : string;
  viewUserUrl:string;
  updateUserUrl:string;
  getUserUrl:string;
  http:HttpClient;
  constructor(http:HttpClient)  { 
    this.http = http;

    // this.userLoginUrl = 'http://localhost:8080/login';
    this.signUpUrl = 'http://localhost:8080/signup';
    this.deleteUserUrl = 'http://localhost:8080/deleteuser';
    this.viewUserUrl = 'http://localhost:8080/viewUser';
    this.updateUserUrl = 'http://localhost:8080/updateUser';
    this.getUserUrl = 'http://localhost:8080/getUser';
  }

  // public Login(login: Login): Observable<boolean>{
  //   return this.http.post<boolean>(this.userLoginUrl,login);
  // }  
  public viewUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.viewUserUrl);
  }
  public Signup(user: User): Observable<boolean>{
    return this.http.post<boolean>(this.signUpUrl,user);
  }  
  public deleteUser(id: Number): Observable<String>{
    return this.http.delete<String>(`${this.deleteUserUrl}/${id}`);
  }
  public updateUser(user:User):Observable<string>{
    console.log(JSON.stringify(user));
    return this.http.put<string>(this.updateUserUrl,user);
  }
  public getUser(id: Number): Observable<User> {
    return this.http.get<User>(`${this.getUserUrl}/${id}` );
}
}
