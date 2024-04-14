import { Routes } from '@angular/router';
import { ProductsComponent } from './features/products/products.component';
import { CartComponent } from './features/cart/cart.component';
import { DetailsComponent } from './features/product/details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product-detail/:id',
    component: DetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
