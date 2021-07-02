import { Component, OnInit } from '@angular/core';
import { categoria } from '../../models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  public aCategorias: Array<categoria>;
  constructor() {
    this.aCategorias = [
      new categoria(1, 'Vehiculos', true),
      new categoria(2, 'Inmueble', true),
      new categoria(3, 'Deportes', true),
      new categoria(4, 'Tecnologia', true),
      new categoria(5, 'Mascotas', false),
    ];
  }

  ngOnInit(): void {}
}
