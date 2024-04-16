import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { CartComponent } from './features/cart/cart.component';
import { DetailsComponent } from './features/products/product/details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'product-detail/:id',
    loadComponent: () =>
      import('./features/products/product/details/details.component').then(
        (c) => c.DetailsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component').then((c) => c.CartComponent),
  },
];
