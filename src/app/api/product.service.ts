import { HttpClient } from '@angular/common/http';
import {
  EnvironmentInjector,
  Injectable,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { Product } from '../shared/models/product.model';
import { CartStore } from '../store/cart.store';
import { environment } from '@envs/environment';
import { map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _endPoint: string = `${environment.baseApiUrl}`;
  public productss = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _injector = inject(EnvironmentInjector);

  constructor() {
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this._http
      .get<Product[]>(`${this._endPoint}?sort=desc`)
      .pipe(
        map((products: Product[]) =>
          products.map((product: Product) => ({ ...product, qty: 1 }))
        ),
        tap((data: Product[]) => this.productss.set(data))
      )
      .subscribe();
  }

  public getProductById(id: number) {
    // const product$ = this._http.get<Product>(`${this._endPoint}/${id}`);
    // return toSignal(product$); // esto da error de injecctor

    return runInInjectionContext(this._injector, () =>
      toSignal<Product | undefined>(
        this._http.get<Product>(`${this._endPoint}/${id}`)
      )
    );
  }
}
