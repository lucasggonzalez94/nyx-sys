import { Component } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { Price } from 'src/app/shared/interfaces/price.interface';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  public allProducts: Product[] = [];
  public products: Product[] = [];
  public currentPage: number = 1;
  public pageSize: number = 12;
  public isLoading: boolean = false;

  constructor ( private productsService: ProductsService ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.isLoading = true;
    this.productsService.searchProducts()
      .subscribe( (products: Product[]) => {
        this.allProducts = products;
        this.isLoading = false;
        this.loadProducts(this.currentPage);
        this.productsService.searchTerms = {
          name: '',
          category: '',
          price: {
            minPrice: '0',
            maxPrice: '99999999999999'
          }
        };
      });
  }

  searchProductsByName(name: string) {
    this.productsService.searchTerms = {
      ...this.productsService.searchTerms,
      name
    };
    this.getAllProducts();
  }
  searchProductsByCategory(category: string) {
    this.productsService.searchTerms = {
      ...this.productsService.searchTerms,
      category
    };
    this.getAllProducts();
  }
  searchProductsByPrice(price: Price) {
    this.productsService.searchTerms = {
      ...this.productsService.searchTerms,
      price
    };
    this.getAllProducts();
  }

  loadProducts(page: number) {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.products = this.allProducts.slice(startIndex, endIndex);
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.allProducts.length / this.pageSize)) {
      this.loadProducts(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.loadProducts(this.currentPage - 1);
    }
  }
}
