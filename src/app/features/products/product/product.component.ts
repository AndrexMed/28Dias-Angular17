import { Component, Input, computed, input, model } from '@angular/core';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

function addDiscontProperty(product: Product): Product {
  return {
    ...product,
    discount: false,
    rating: {
      rate: 4.1,
      count: 50,
    },
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
  // @Input({
  //   required: true,
  //   transform: addDiscontProperty,
  // })
  // product!: Product;

  product = input.required({
    transform: addDiscontProperty,
  });

  rating = computed(() => {
    const { rating } = this.product();
    return Object.values(rating);
  });

  value = model(0);

  ngOnInit() {
    //console.log(this.product);
  }

  increment() {
    this.value.update(currentValue => currentValue + 1);
  }

  handleImageError(event: any) {
    event.target.src =
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  }
}
