import { Component, inject } from '@angular/core';
import { ProductService } from '../../api/product.service';
import { ProductComponent } from './product/product.component';

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
}
