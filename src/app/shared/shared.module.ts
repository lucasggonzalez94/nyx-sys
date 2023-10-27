import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ProductsGridComponent } from '../products/components/products-grid/products-grid.component';
import { ProductCardComponent } from '../products/components/product-card/product-card.component';
import { CarouselTitleComponent } from './components/carousel-title/carousel-title.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    InputSearchComponent,
    ProductsGridComponent,
    ProductCardComponent,
    CarouselTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
