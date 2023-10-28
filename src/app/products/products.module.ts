import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from '../shared/pages/product-page/product-page.component';
import { ProductsPageComponent } from '../shared/pages/products-page/products-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ProductsModule { }
