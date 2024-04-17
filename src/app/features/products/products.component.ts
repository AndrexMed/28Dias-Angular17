import {
  Component,
  EnvironmentInjector,
  OnInit,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { ProductService } from '../../api/product.service';
import { Product } from '../../models/product.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkeletonComponent } from '../../shared/components/skeleton/skeleton.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, AsyncPipe, SkeletonComponent, LoadingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  productSvc = inject(ProductService);
  products$ = this.productSvc.getAllProducts();

  productsSignal = toSignal(this.products$);

  productSvc2!: any;
  private readonly injector = inject(EnvironmentInjector);

  cond: boolean = false;
  
  ngOnInit(): void {
    // runInInjectionContext(this.injector, () => {
    //   this.productSvc2 = inject(ProductService);
    //   const result = toSignal(this.products$);
    //   console.log(result);
    // });
  }
}
