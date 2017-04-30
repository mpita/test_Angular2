import { Component } from '@angular/core';

// importamos input componet que creamos
import { InputComponet } from './input/input.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title que se muestra en app component
  title = 'Ejercicios de uso de angular!';
  // votacion modificado por la funcion addVoto
  votacion = '';

  // votos array visible en input app que se integar con el selector input-componet
  votos = [
    {title: 'opción 1'},
    {title: 'opción 2'},
    {title: 'opción 3'},
    {title: 'opción 4'},
  ]

  // funcion addVoto, para agregar un voto a lo que queremos addVoto
  addVoto (response:string){
    this.votacion = "Usted eligio: " + response;
  }
}
