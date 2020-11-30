import { Component, OnInit } from '@angular/core';
import {OilCartService} from '../oil-cart.service';
import {Oil} from '../product-list/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-just-cart',
  templateUrl: './just-cart.component.html',
  styleUrls: ['./just-cart.component.scss']
})
export class JustCartComponent implements OnInit {

  cartList$: Observable<Oil[]>;
  constructor(private cart: OilCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
