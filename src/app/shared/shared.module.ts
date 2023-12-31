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
import { ButtonComponent } from './components/button/button.component';
import { GridComponent } from './components/grid/grid.component';
import { ProductsPageComponent } from '../products/pages/products-page/products-page.component';
import { ProductPageComponent } from '../products/pages/product-page/product-page.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



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
    ProductsPageComponent,
    ProductPageComponent,
    ButtonIconComponent,
    CarouselComponent,
    SpinnerComponent
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
    ProductPageComponent,
    ProductsPageComponent,
    CarouselComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
