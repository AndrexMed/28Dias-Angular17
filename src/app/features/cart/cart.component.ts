import { Component, inject } from '@angular/core';
import { CartStore } from '../../store/cart.store';
import { ProductService } from '../../api/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  //cartStore = inject(CartStore);
  productsSvc = inject(ProductService);

  onRemove(idProduct: number){
    //this.cartStore.removeItemFromCart(idProduct);
    this.productsSvc.removeItemFromCart(idProduct);
  }
}