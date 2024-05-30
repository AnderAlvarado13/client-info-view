import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoInformacionComponent } from './ingreso-informacion/ingreso-informacion.component';
import { PantallaResumenComponent } from './pantalla-resumen/pantalla-resumen.component';

const routes: Routes = [
  { path: '', component: IngresoInformacionComponent },
  { path: 'resumen', component: PantallaResumenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
