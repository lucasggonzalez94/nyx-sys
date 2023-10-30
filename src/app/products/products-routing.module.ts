import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductsPageComponent
  },
  {
    path: 'list/:category',
    component: ProductsPageComponent
  },
  {
    path: 'detail/:id',
    component: ProductPageComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
