import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { Product } from '../shared/models/product.model';
import { computed } from '@angular/core';

export interface CartState {
  products: Product[];
  count: number;
}

const initialState: CartState = {
  products: [],
  count: 0
};

export const CartStore = signalStore(
  // { providedIn: 'root' },
  withState(initialState),
  withMethods(({ products, ...store }) => ({
    //Metodo para añadir
    addToCart(product: Product) {
      const updatedProduct = [...products(), product];
      patchState(store, { products: updatedProduct });
    },

    //Metodo para eliminar
    removeItemFromCart(idProduct: number) {
      const updatedProduct = products().filter(
        (product) => product.id !== idProduct
      );
      patchState(store, { products: updatedProduct });
    },
  })),
  withHooks({
    onInit: (store) => console.log("onInit Cart Store ", store),
    onDestroy: (store) => console.log("onDestroy Cart Store ", store)
  }),
  withComputed(({products}) => ({
    count: computed(() => products().length)
  }))
);
