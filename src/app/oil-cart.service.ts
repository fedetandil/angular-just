import { Injectable } from '@angular/core';
import {Oil} from './product-list/product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OilCartService {


  private _cartList: Oil[] = [];
  cartList: BehaviorSubject<Oil[]> = new BehaviorSubject([]);


  constructor() { }

  addToCart(oil: Oil): void{
    const item: Oil = this._cartList.find((v1) => v1.name === oil.name);
    if (!item) {
      this._cartList.push({...oil});
    }else{
      item.quantity += oil.quantity;
    }
    this.cartList.next(this._cartList);
  }
}
