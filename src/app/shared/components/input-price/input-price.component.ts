import { Component, EventEmitter, Output } from '@angular/core';
import { Price } from '../../interfaces/price.interface';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'shared-input-price',
  templateUrl: './input-price.component.html',
  styleUrls: ['./input-price.component.scss']
})
export class InputPriceComponent {
  constructor( private productsService: ProductsService ) {}

  public minPrice: string = '';
  public maxPrice: string = '';

  @Output()
  public onChange = new EventEmitter<Price>();

  emitValue(): void {
    this.onChange.emit({
      minPrice: this.minPrice || this.productsService.searchTerms.price.minPrice,
      maxPrice: this.maxPrice || this.productsService.searchTerms.price.maxPrice
    });
  }
}
