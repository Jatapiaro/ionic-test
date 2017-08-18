import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarPage } from '../agregar/agregar';
import { DetallePage } from '../detalle/detalle';
import { Lista } from '../../app/classes/index';


@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {

    constructor(public navCtrl: NavController, private _listaDeseos : ListaDeseosService) {

    }

    ngOnInit(){}

    irAgregar(){
        this.navCtrl.push( AgregarPage );
    }

    verDetalle(lista : Lista, index : number){
      this.navCtrl.push( DetallePage, {lista, index} );
    }

}
