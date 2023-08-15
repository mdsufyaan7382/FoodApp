import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './menu';
import {Cart} from './cart';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {
  viewUrl:string;
  addUrl:string;
  updateUrl:string;
  menuItemUrl:string;

  deleteItemUrl:string;
  addCartItemUrl:string;

  http:HttpClient;

  constructor(http:HttpClient) { 
    this.http = http;
    this.viewUrl ='http://localhost:8080/view';
    this.addUrl = 'http://localhost:8080/add';
    this.updateUrl = 'http://localhost:8080/update';
    this.menuItemUrl = 'http://localhost:8080/menu';
    this.deleteItemUrl = 'http://localhost:8080/delete';  
    this.addCartItemUrl = 'http://localhost:8080/cartItem';

  }
  public viewAllMenuItems(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.viewUrl);
  }
  public addItem(menu:Menu){
    return this.http.post<Menu>(this.addUrl,menu);
  }
  public updateItem(menu:Menu){
    return this.http.put<Menu>(this.updateUrl,menu);
  }

  public getItem(id: number): Observable<Menu> {
      return this.http.get<Menu>(`${this.menuItemUrl}/${id}` );
  }
  public deleteItem(id: number): Observable<String>{
    return this.http.delete<String>(`${this.deleteItemUrl}/${id}`);
  }
  public addCartItem(cart:Cart){
    return this.http.post<Cart>(this.addCartItemUrl,cart);
  }
}
