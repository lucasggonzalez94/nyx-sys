import { Component } from '@angular/core';
import { Products } from 'src/app/products/interfaces/products';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public products: Products[] = [];
  public isLoading: boolean = false;

  constructor ( private productsService: ProductsService ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.products = this.productsService.cacheStore;
  }

  getAllProducts(): void {
    this.isLoading = true;
    this.productsService.getAllProducts()
      .subscribe( (products: Products[]) => {
        this.products = products;
        this.isLoading = false;
      });
  }

}
