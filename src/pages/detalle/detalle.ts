import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
  selector: 'page-detallte',
  templateUrl: 'detalle.html'
})
export class DetallePage {

  index : number;
  lista : Lista;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public _listaDeseosService : ListaDeseosService, public alertCtrl: AlertController) {
    this.index = this.navParams.data.index;
    this.lista = this.navParams.data.lista;
  }

  actualizarItem(item : ListaItem){

    item.completado = !item.completado;
    let todosMarcados = true;
    for(let it of this.lista.items){
      if(!it.completado){
        todosMarcados = false;
        break;
      }
    }
    this.lista.completado = todosMarcados;
    this._listaDeseosService.actualizarData();

  }

  borrarLista(i : number){
    let confirm = this.alertCtrl.create({
      title: 'Confirmación de eliminación',
      message: `¿Estás seguro de que quieres borrar la lista ${this.lista.nombre}?`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Agree clicked');
            this._listaDeseosService.eliminarLista(i);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
