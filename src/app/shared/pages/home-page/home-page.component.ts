import { Component } from '@angular/core';
import { Product } from 'src/app/products/interfaces/products.interface';
import { ProductsService } from 'src/app/products/services/products.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public products: Product[] = [];

  constructor ( private productsService: ProductsService, public loadingService: LoadingService ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.loadingService.showLoading();
    this.productsService.getAllProducts()
      .subscribe( (products: Product[]) => {
        this.products = products;
        this.loadingService.hideLoading();
      });
  }
}
