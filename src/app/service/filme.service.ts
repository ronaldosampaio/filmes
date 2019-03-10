import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {
  private baseUrl: string =   "https://api.themoviedb.org/3/";
  private imagemUrl: string = "http://image.tmdb.org/t/p/w400";
  private urlMoviePopular: string = "movie/popular";
  private urlSearchMovies:string = "search/movie";
  private apikey: string= "f9b276a8a665a41333c2def2f632a2e4";
  private queryBusca: string = "&query=";
  
  constructor(public http: HttpClient) { }

  private getApiKey(): string{
    return `?api_key=${this.apikey}`;
  }

  //metodo listar filmes
  public getMoviePopular(){
     return this.http.get(this.baseUrl +this.urlMoviePopular +this.getApiKey()); 
  }

 //metodo buscar filmes
  public getBuscaFilme(buscaDigitada: string) {
    return this.http.get(this.baseUrl +this.urlSearchMovies +this.getApiKey() +"&query="+buscaDigitada +"&sort_by=popularity.desc"); 
  }
 
  
}
