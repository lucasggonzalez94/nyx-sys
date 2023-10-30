import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Name, Product } from '../interfaces/products.interface';
import { SearchTerms } from '../interfaces/searchTerms.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = 'https://api.escuelajs.co/api/v1';
  public searchTerms: SearchTerms = {
    name: '',
    category: '',
    price: {
      minPrice: '0',
      maxPrice: '99999999999999',
    },
  };

  constructor(private http: HttpClient) {}

  private getProductsRequest(url: string): Observable<Product[]> {
    return this.http.get<Product[]>(url).pipe(catchError((error) => of([])));
  }

  getAllProducts(): Observable<Product[]> {
    const url = `${this.baseUrl}/products`;
    return this.getProductsRequest(url).pipe(
      map((products) =>
        products.filter((product) =>
          Object.values(Name).includes(product.category.name as Name)
        )
      )
    );
  }

  searchProducts(): Observable<Product[]> {
    const url = `${this.baseUrl}/products`;
    return this.getProductsRequest(url).pipe(
      map((products) =>
        products.filter((product) =>
          product.title.toLocaleLowerCase().includes(this.searchTerms.name)
        )
      ),
      map((products) =>
        products.filter((product) =>
          product.category.name
            .toLocaleLowerCase()
            .includes(this.searchTerms.category.toLocaleLowerCase())
        )
      ),
      map((products) =>
        products.filter(
          (product) =>
            product.price >= Number(this.searchTerms.price.minPrice) &&
            product.price <= Number(this.searchTerms.price.maxPrice)
        )
      )
    );
  }

  searchProductById(id: string | number): Observable<Product | undefined> {
    const url = `${this.baseUrl}/products`;
    return this.getProductsRequest(url).pipe(
      map((products) => products.find((product) => product.id.toString() === id))
    );
  }

  setSearchTerm(terms: SearchTerms) {
    this.searchTerms = terms;
  }
}
