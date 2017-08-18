import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes/index';

@Pipe({
  name: 'pendientes'
})
export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], completa: boolean): Lista[] {
    completa = false;
    let nuevaLista : Lista[] = [];
    for ( let l of listas){
      if(l.completado == completa){
        nuevaLista.push(l);
      }
    }
    return nuevaLista;
  }
}
