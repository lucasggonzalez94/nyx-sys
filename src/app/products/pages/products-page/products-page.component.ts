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
  constructor ( private productsService: ProductsService ) {}

  public allProducts: Product[] = [];
  public products: Product[] = [];
  public currentPage: number = 1;
  public pageSize: number = 12;
  public isLoading: boolean = false;
  public name: string = this.productsService.searchTerms.name;
  public category: string = this.productsService.searchTerms.category;
  public price: Price = this.productsService.searchTerms.price;


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

  setName(name: string) {
    this.name = name;
  }
  setCategory(category: string) {
    this.category = category;
    this.searchProducts();
  }
  setPrice(price: Price) {
    this.price = price
  }

  deleteFilters() {
    this.productsService.searchTerms = {
      name: '',
      category: '',
      price: {
        minPrice: '0',
        maxPrice: '99999999999999'
      }
    };
    this.getAllProducts();
  }

  searchProducts() {
    this.productsService.searchTerms = {
      name: this.name,
      category: this.category,
      price: this.price
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
