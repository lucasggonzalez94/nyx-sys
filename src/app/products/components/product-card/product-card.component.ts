import { Component, Input } from '@angular/core';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  public product: Products = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: [],
    creationAt: '',
    updatedAt: '',
    category: {
      id: 0,
      name: '',
      image: '',
      creationAt: '',
      updatedAt: '',
    },
  };
}
