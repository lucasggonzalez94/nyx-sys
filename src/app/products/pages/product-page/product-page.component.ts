import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/products.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const productId = params['id'];
      this.productsService
        .searchProductById(productId)
        .subscribe((product) => (this.product = product));
    });
  }

  public productId?: string;
  public product?: Product;
}
