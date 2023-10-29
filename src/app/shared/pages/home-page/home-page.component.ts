import { Component } from '@angular/core';
import { Product } from 'src/app/products/interfaces/products.interface';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public products: Product[] = [];
  public isLoading: boolean = false;

  constructor ( private productsService: ProductsService ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.isLoading = true;
    this.productsService.getAllProducts()
      .subscribe( (products: Product[]) => {
        this.products = products;
        this.isLoading = false;
      });
  }
}
