import { Component, OnInit } from '@angular/core';
import { Oil } from './product';
import {OilCartService} from '../oil-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  oils: Oil[] = [{
    name: 'Aceite de Manzanilla',
    type: 'Simple',
    price: 200,
    stock: 5,
    image: 'assets/image/manzanilla.jpg',
    clearance: false,
    quantity: 0
  },
    {
      name: 'Aceite de Eucalipto',
      type: 'Simple',
      price: 200,
      stock: 5,
      image: 'assets/image/eucalipto.jpg',
      clearance: true,
      quantity: 0
    }, {
      name: 'Aceite Anti-Stress',
      type: 'Blend',
      price: 400,
      stock: 0,
      image: 'assets/image/anti-stress.jpg',
      clearance: false,
      quantity: 0
    }];

  constructor(private cart: OilCartService) { }

  ngOnInit(): void {
  }

  addToCart(oil: Oil): void{
    if (oil.quantity > 0 && oil.quantity <= oil.stock){
      oil.stock -= oil.quantity;
      this.cart.addToCart(oil);
      oil.quantity = 0;
    }
  }

  maxReached(m: string): void{
    alert(m);
  }

}
