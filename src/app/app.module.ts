import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFilmeComponent } from './lista-filme/lista-filme.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmeService } from './service/filme.service';
import { FilmePipe } from './pipe/filme.pipe';
import { BuscaFilmeComponent } from './busca-filme/busca-filme.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFilmeComponent,
    FilmePipe,
    BuscaFilmeComponent,
    MenuComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
