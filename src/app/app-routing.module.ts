import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InmuebleComponent } from './components/inmueble/inmueble.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

const routes: Routes = [
  { path: 'Vehiculos', component: VehiculosComponent },
  { path: 'Inmueble', component: InmuebleComponent },
  { path: 'Home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
