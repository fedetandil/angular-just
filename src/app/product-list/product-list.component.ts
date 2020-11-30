import { Component, OnInit } from '@angular/core';
import { Oil } from './product';

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

  constructor() { }

  ngOnInit(): void {
  }

  maxReached(m: string): void{
    alert(m);
  }

}
