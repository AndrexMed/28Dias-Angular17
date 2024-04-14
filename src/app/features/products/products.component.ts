import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../api/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productSvc = inject(ProductService);

  products: Product[] = [];

  ngOnInit() {
    this.productSvc.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
