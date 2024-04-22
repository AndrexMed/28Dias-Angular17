import {
  AfterViewInit,
  Component,
  ElementRef,
  EnvironmentInjector,
  OnInit,
  ViewChild,
  contentChild,
  contentChildren,
  effect,
  inject,
  runInInjectionContext,
  viewChild,
  viewChildren,
} from '@angular/core';
import { ProductService } from '../../api/product.service';
import { Product } from '../../models/product.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { CartStore } from '../../store/cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductComponent,
    CommonModule,
    SkeletonComponent,
    LoadingComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {

  //cartStore = inject(CartStore);

  childComponent = viewChild(ProductComponent);
  childrenComponent = viewChildren(ProductComponent);

  button = contentChild<ElementRef>('btn');
  products = contentChildren<ElementRef>('products');

  productSvc = inject(ProductService);
  products$ = this.productSvc.getAllProducts();

  productsSignal = toSignal(this.products$);

  productSvc2!: any;
  private readonly injector = inject(EnvironmentInjector);

  cond: boolean = false;

  valueFromParent = 100;

  constructor() {
    effect(() => {
      const valueOfChild = this.childComponent()?.value();

      if(valueOfChild){
        console.log('Hello From Child: ', this.childComponent()?.value());
      }else{
        console.log("%cEl value de child no tiene un valor o no se ha renderizado", "color:red")
      }
      
      const valueBtnOfChild = this.button();
      const valueOfProductsChild = this.childrenComponent();

      if(valueBtnOfChild){
        console.log(valueBtnOfChild);
      }else{
        console.log('here: ', valueBtnOfChild);
      }

      if (valueOfProductsChild){
        console.log(valueOfProductsChild);
      }else{
        console.log("here ", valueOfProductsChild);
      }
    });
  }

  ngOnInit(): void {
    // runInInjectionContext(this.injector, () => {
    //   this.productSvc2 = inject(ProductService);
    //   const result = toSignal(this.products$);
    //   console.log(result);
    // });
  }

  onAddToCart(product: Product){
    //this.cartStore.addToCart(product);
    this.productSvc.addToCart(product);
  }
}
