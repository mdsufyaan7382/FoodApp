import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cart} from './cart';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  viewCartUrl:string;
  cartItemUrl:string;
  deleteCartItemsUrl:string;
   http:HttpClient;

  constructor(http:HttpClient)  { 
    this.http = http;
      this.viewCartUrl = 'http://localhost:8080/viewCart';
      this.cartItemUrl = 'http://localhost:8080/cartItem';
      this.deleteCartItemsUrl ='http://localhost:8080/deleteCartItems'; 
  }
  public addCartItem(cart:Cart){
    return this.http.post<Cart>(this.cartItemUrl,cart);
  }
  public viewCartItems(): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.viewCartUrl);
  }
  public deleteCartItems(id: number): Observable<boolean>{
    return this.http.delete<boolean>(`${this.deleteCartItemsUrl}/${id}`);
}

 
}
