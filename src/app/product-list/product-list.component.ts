import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  oil = {
    "name":"Aceite de Manzanilla",
    "type": "Simple",
    "price": 200,
    "stock":5,
    "image": "assets/image/manzanilla.jpg"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
