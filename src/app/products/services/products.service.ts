import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Name, Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'https://api.escuelajs.co/api/v1';
  public searchTerm: string = '';

  constructor( private http: HttpClient ) { }

  private getProductsRequest( url: string ): Observable<Product[]> {
    return this.http.get<Product[]>( url )
      .pipe(
        catchError(error => of([]))
      );
  }

  getAllProducts(): Observable<Product[]> {
    const url = `${this.baseUrl}/products`;
    return this.getProductsRequest(url)
      .pipe(
        map(products => products.filter(product => Object.values(Name).includes(product.category.name as Name)))
      );
  }

  searchProducts(): Observable<Product[]> {
    const url = `${this.baseUrl}/products`;
    return this.getProductsRequest(url)
      .pipe(
        map(products => products.filter(product => product.title.toLocaleLowerCase().includes(this.searchTerm)))
      );
  }

  setSearchTerm(term: string) {
    this.searchTerm = term;
  }
}
