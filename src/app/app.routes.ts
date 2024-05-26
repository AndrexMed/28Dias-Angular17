import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./features/products/product.routes'),
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
