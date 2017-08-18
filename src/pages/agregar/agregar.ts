import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';

import { ListaDeseosService } from './../../app/services/lista-deseos.service';


@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html'
})

export class AgregarPage {


  nombreLista : string = "";
  nombreItem : string = "";

  items : ListaItem[] = [];


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private _listaDeseos : ListaDeseosService) {
  }

  ngOnInit(){
    this.items = [];
    this.nombreLista = "";
    this.nombreItem = "";
  }

  agregar(){
    if(this.nombreItem == ""){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);

    this.nombreItem = '';
  }

  eliminarElemento( index:number ){
    this.items.splice(index, 1);
  }

  mostrarTarjetas(){
    return this.items.length>0;
  }

  agregarLista(){
    if( this.nombreLista == ""){
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'Debes ingresar un nombre para la lista!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    let lista = new Lista(this.nombreLista);
    lista.items = this.items;
    this._listaDeseos.agergarLista(lista);
    this.navCtrl.pop();
  }

}
