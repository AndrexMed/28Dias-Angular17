import {
  Component,
  PLATFORM_ID,
  afterNextRender,
  afterRender,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductService } from './api/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  //styleUrl: './app.component.scss',
  //styleUrls: ['./app.component.scss', './otroArchivo.scss'],
  // styles: ['$primary: red; h2 {color: $primary}'],
  styles: `h2{
    color: orange;
    font-weight: bold;
  }`,
})
export class AppComponent {
  private readonly productSvc = inject(ProductService);

  products$ = this.productSvc.getAllProducts();

  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    //localStorage.setItem('cart', 'value'); //Daria error

    afterNextRender(() => {
      localStorage.setItem('cart', 'value');
      console.log('1. isPlatformBrowser: ', this.platformId);
    });

    afterRender(() => {
      console.log('2. isPlatformServer: ', this.platformId);
    });
  }
}
