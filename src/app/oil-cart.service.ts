import { Injectable } from '@angular/core';
import {Oil} from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class OilCartService {

  cartList: Oil[] = [];

  constructor() { }

  addToCart(oil: Oil): void{
    const item: Oil = this.cartList.find((v1) => v1.name === oil.name);
    if (!item) {
      this.cartList.push({...oil});
    }else{
      item.quantity += oil.quantity;
    }
    console.log(this.cartList);
  }
}
