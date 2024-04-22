import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component'),
  },
  {
    path: 'product-detail/:id',
    loadComponent: () =>
      import('./features/products/product/details/details.component'),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component'),
  },
  {
    path: 'signals',
    loadComponent: () => import('./features/signal/signal.component'),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component')
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];
