import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmeService } from '../service/filme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit {

  listaFilme: any[]=[];

  constructor(public filmeService:FilmeService) { }

/*
  moviePopular(){
  this.filmeService.getMoviePopular().subscribe(
    data=>{
        const resultado = (data as any); //obj vem com data convertido em any aceita tudo
        this.listaFilme =JSON.parse(JSON.stringify(resultado || null ));   //converte para json
        console.log(this.listaFilme);
        
    }, 
    error=>{
        console.log(error);
    }
  )

}
*/

moviePopular(){
  this.filmeService.getMoviePopular()
                   .subscribe((data: any)=>{
        console.log(data);
        this.listaFilme=data.results;
       
    }, 
    error=>{
        console.log(error);
    }
  )

}

  ngOnInit() {
    this.moviePopular();
  }
  

}
