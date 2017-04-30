import { Component } from '@angular/core';

// importamos input componet que creamos
import { InputComponet } from './input/input.component'

// importamos el servicio Ticket
import { TicketService } from './services/ticket.service'

import { FormBuilder, FormGroup } from '@angular/forms'

// importar ngrx
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import {Observable} from 'rxjs/Observable';

interface AppState {
  counter: number;
}

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
  // listado de ticket
  tickets:any;

  // creamos un grupo de datos para nuestro formulario
  myForm:FormGroup;

  // ngrx
  counter: Observable<number>;

  // el contructor crear el listado de tique desde el servicio ticketService
  constructor(
    private ticketService :TicketService, 
    private fb: FormBuilder,
    private store: Store<AppState>
    ) {
    this.counter = store.select('counter');

    this.tickets = ticketService.getTiket();

    this.myForm = fb.group({
      'name': ['Manuel']
    });
  }

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
  
  // asignandole un valor inicial a pipe
  cantidad = 5;
  factor = 1;
  
  // captando una información de formulario
  onSubmit(value: string): void {
    console.log('El fomulario tiene:', value);
  }

  // ngrx
  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }
  
}
