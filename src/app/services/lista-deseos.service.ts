import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService{

  listas : Lista[] = []

  constructor(){
    this.cargarData();
  }

  agergarLista( lista : Lista ){
    this.listas.push(lista);
    this.actualizarData();
  }

  actualizarData(){
    localStorage.setItem( 'data', JSON.stringify(this.listas) );
  }

  cargarData(){
    if( localStorage.getItem('data') ){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  eliminarLista(index : number){
    this.listas.splice(index,1);
    this.actualizarData();
  }

}
