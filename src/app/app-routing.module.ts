import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaFilmeComponent } from './lista-filme/lista-filme.component';
import { BuscaFilmeComponent } from './busca-filme/busca-filme.component';

const routes: Routes = [
  { path: "lista", component: ListaFilmeComponent },
  { path: "search", component: BuscaFilmeComponent },
  { path: "", pathMatch: "full", redirectTo: "lista" },
  { path: "**", pathMatch: "full", redirectTo: "lista" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
