import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'https://api.escuelajs.co/api/v1';

  public cacheStore: Products[] = [];

  constructor( private http: HttpClient ) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('store', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    const store = localStorage.getItem('store');
    if (store) {
      this.cacheStore = JSON.parse(store);
    }
  }

  private getProductsRequest( url: string ): Observable<Products[]> {
    return this.http.get<Products[]>( url )
      .pipe(
        catchError(error => of([]))
      );
  }

  getAllProducts(): Observable<Products[]> {
    const url = `${this.baseUrl}/products`;
    return this.getProductsRequest(url)
      .pipe(
        tap(products => this.cacheStore = products),
        tap(() => this.saveToLocalStorage())
      );
  }
}
