import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export default class DetailsComponent {

  @Input('id') productId!: number; // De esta forma la variable es reactiva.

  //Forma Antigua
  //productId!: number;
  //route = inject(ActivatedRoute);

  ngOnInit() {
    //this.productId = +this.route.snapshot.paramMap.get('id')!; //Forma1
    //this.productId = this.route.snapshot.params['id']; //Forma2
    //this.route.params.subscribe((params) => {
    //this.productId = params['id'];
    //}); // Forma3 Reactive
  }
}
