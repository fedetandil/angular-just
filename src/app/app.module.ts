import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import { JustCartComponent } from './just-cart/just-cart.component';
import { JustProductsComponent } from './just-products/just-products.component';
import { JustAboutComponent } from './just-about/just-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    JustCartComponent,
    JustProductsComponent,
    JustAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
