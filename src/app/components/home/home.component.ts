import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/models/categoria';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public aCategorias: Array<categoria>;

  constructor() {
    this.aCategorias = [
      new categoria(1, 'Vehiculos', true),
      new categoria(2, 'Inmueble', true),
      new categoria(3, 'Tecnologia', true),
    ];
  }

  ngOnInit(): void {}
}
