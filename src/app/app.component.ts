import { Component } from '@angular/core';
import { categoria } from './models/categoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public aCategorias: Array<categoria>;

  constructor() {
    this.aCategorias = [
      new categoria(1, 'Vehiculos', true),
      new categoria(2, 'Inmueble', true),
    ];
  }
}
