import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products/services/products.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public inProductsPage: boolean = false;
  public currentRoute: string = '';

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.navigationService.routeChange.subscribe((route) => {
      this.currentRoute = route; // Almacena la ruta actual
      this.onRouteChange(route);
    });
  }

  onRouteChange(route: string) {
    if (route.includes('products')) {
      this.inProductsPage = true;
    } else {
      this.inProductsPage = false;
    }
  }

  searchProducts(name: string) {
    this.productsService.searchTerms = {
      ...this.productsService.searchTerms,
      name
    };
    this.router.navigate(['products/list']);
  }
}
