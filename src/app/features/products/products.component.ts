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

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  productSvc = inject(ProductService);
  products$ = this.productSvc.getAllProducts();

  productSvc2!: any;
  private readonly injector = inject(EnvironmentInjector);

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.productSvc2 = inject(ProductService);
      const result = toSignal(this.products$);
      console.log(result);
    });
  }
}
