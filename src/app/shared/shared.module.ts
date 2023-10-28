import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ProductCardComponent } from '../products/components/product-card/product-card.component';
import { CarouselTitleComponent } from './components/carousel-title/carousel-title.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { FormsModule } from '@angular/forms';
import { InputPriceComponent } from './components/input-price/input-price.component';
import { CategoryCardComponent } from '../categories/components/category-card/category-card.component';
import { ButtonComponent } from './components/button/button.component';
import { GridComponent } from './components/grid/grid.component';
import { ProductsModule } from '../products/products.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    InputSearchComponent,
    CarouselTitleComponent,
    InputTextComponent,
    InputSelectComponent,
    InputPriceComponent,
    ButtonComponent,
    GridComponent,
    ProductCardComponent,
    CategoryCardComponent,
    ProductsPageComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    InputTextComponent,
    InputSelectComponent,
    InputPriceComponent,
    GridComponent,
    ProductCardComponent,
    CategoryCardComponent,
    ProductPageComponent,
    ProductsPageComponent
  ]
})
export class SharedModule { }
