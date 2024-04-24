import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { CartStore } from '../store/cart.store';
import { environment } from '@envs/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly _endPoint: string = `${environment.baseApiUrl}`;
  public productss = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);

  constructor(){
    this.getAllProducts();
  }

  public getAllProducts(): void {
    this._http
      .get<Product[]>(`${this._endPoint}?sort=desc`)
      .pipe(tap((data: Product[]) => this.productss.set(data)))
      .subscribe();
  }

  public getProductById(id: number) {
    return this._http
    .get<Product>(`${this._endPoint}/${id}`)
  }
}
