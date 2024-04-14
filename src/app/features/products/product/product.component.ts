import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

function addDiscontProperty(product: Product) {
  return {
    discount: false,
    ...product,
  };
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input({
    required: true,
    transform: addDiscontProperty,
  })
  product!: Product;

  addToCart() {}

  handleImageError(event: any) {
    event.target.src =
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  }
}
