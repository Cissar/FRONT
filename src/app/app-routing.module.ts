import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaNoticiasComponent } from './Componentes-app/lista-noticias/lista-noticias.component';

const routes: Routes = [
  {
    path:'',
    component: ListaNoticiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
