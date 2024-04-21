import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Product } from '../models/product.model';

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const CartStore = signalStore(
  { providedIn: 'root' },
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
  }))
);
