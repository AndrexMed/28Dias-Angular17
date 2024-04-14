import { Component, inject } from '@angular/core';
import { ProductService } from '../../api/product.service';
import { Product } from '../../models/product.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productSvc = inject(ProductService);

  products$ = this.productSvc.getAllProducts();
}
