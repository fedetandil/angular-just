import { Component, OnInit } from '@angular/core';
import {OilCartService} from '../oil-cart.service';

@Component({
  selector: 'app-just-cart',
  templateUrl: './just-cart.component.html',
  styleUrls: ['./just-cart.component.scss']
})
export class JustCartComponent implements OnInit {

  constructor(private cart: OilCartService) { }

  ngOnInit(): void {
  }

}
