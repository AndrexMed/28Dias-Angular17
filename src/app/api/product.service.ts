import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _http = inject(HttpClient);

  getAllProducts() {
    return this._http.get('https://api.escuelajs.co/api/v1/products');
  }
}
