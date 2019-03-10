import { Component } from '@angular/core';
import { FilmeService } from '../service/filme.service';

@Component({
  selector: 'busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrls: ['./busca-filme.component.css']
})
export class BuscaFilmeComponent{
 
     constructor(public filmeService: FilmeService) { }

     buscarFilme: any[]=[];

    searchFilme(buscaDigitada) {
      if(buscaDigitada == "" || buscaDigitada == null){
        console.log("digite uma pesquisa!!!");
        this.buscarFilme=null; 
      }
      else{
              this.filmeService.getBuscaFilme(buscaDigitada)
                              .subscribe((data: any) => {
                console.log(data);
                this.buscarFilme = data.results;
              });
           }
    }
}
