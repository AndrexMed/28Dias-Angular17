import { Component, inject } from '@angular/core';
import { ProductService } from '../../api/product.service';
import { ProductComponent } from './product/product.component';
import { Product } from '@shared/models/product.model';
import { CartStore2 } from 'app/store/shopping-cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export default class ProductsComponent {
  private readonly productSvc = inject(ProductService);
  products = this.productSvc.productss;
  cartStore2 = inject(CartStore2);

  onAddToCart(product: Product) {
    this.cartStore2.addToCart(product);
  }
}
