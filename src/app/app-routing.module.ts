import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./components/presentacion/paginas/inicio/inicio.component";
import { NotFoundComponent } from "./components/presentacion/paginas/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  // {
  //   path: 'america',
  //   component: AmericaComponent
  // },
  // {
  //   path: 'europa',
  //   component: EuropaComponent,
  // },
  // {
  //   path: 'africa',
  //   component: AfricaComponent,
  // },
  // {
  //   path: 'detalle/:pais',
  //   component: DetalleComponent,
  // },
  // {
  //   path: 'modificar',
  //   component: ModificarComponent,
  // },
  // {
  //   path: 'modificados',
  //   component: ModificadosComponent,
  // },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
