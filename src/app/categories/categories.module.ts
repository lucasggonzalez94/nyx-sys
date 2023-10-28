import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoriesGridComponent } from './components/categories-grid/categories-grid.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CategoriesModule { }
