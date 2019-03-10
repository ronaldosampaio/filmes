import { Pipe, PipeTransform, Input } from '@angular/core';
import { BuscaFilmeComponent } from '../busca-filme/busca-filme.component';

@Pipe({
  name: 'filmePipe'
})

export class FilmePipe implements PipeTransform {
  
  transform(filme: any): any {

      let url = "http://image.tmdb.org/t/p/w400";

      if (filme.poster_path) {
         return url + filme.poster_path;
      } 
      else 
          if(filme.backdrop_path) {
             return url + filme.backdrop_path;
          } 
          else 
              return "assets/img/img-sem-cadastro.png";
  }  
}
