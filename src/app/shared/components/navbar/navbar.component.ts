import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public inProductsPage: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  searchProducts(term: string) {
    this.productsService.setSearchTerm(term);
    this.setInProductsPage(true);
    this.router.navigate(['products']);
  }

  setInProductsPage(flag: boolean) {
    this.inProductsPage = flag;
  }
}
