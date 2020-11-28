import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JustProductsComponent} from './just-products/just-products.component';
import {JustAboutComponent} from './just-about/just-about.component';
import {JustCartComponent} from './just-cart/just-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'oils',
    pathMatch: 'full'
  },
  {
    path: 'oils',
    component: JustProductsComponent
  },
  {
    path: 'about',
    component: JustAboutComponent
  },
  {
    path: 'cart',
    component: JustCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
