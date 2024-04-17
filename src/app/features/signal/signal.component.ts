import {
  Component,
  Injector,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  searchQuery = signal<string>('Giovanni Alzate V1');
  searchQueryReadOnly = this.searchQuery.asReadonly();

  usuario = signal<string>('Andres Agudelo');
  usuarioComputed = computed(
    () => `Usuario : ${this.usuario()} + ${this.searchQueryReadOnly()}`
  );

  private readonly injector = inject(Injector);
  constructor() {
    effect(() => console.log(this.searchQuery())); //Dentro del Contexto
  }
  changeValue() {
    this.searchQuery.set('New Value');
    //effect(() => console.log(this.searchQuery()), { injector: this.injector }); //Fuera del contexto de ejecución, Para solventar el error se usa el injector
  }

  onUpdateValue() {
    this.searchQuery.update((current) => current + 'YouTube');
  }
}
