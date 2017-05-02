import { Component, NgZone } from '@angular/core';

// importamos input componet que creamos
import { InputComponet } from './input/input.component'

// importamos el servicio Ticket
import { TicketService } from './services/ticket.service'

import { FormBuilder, FormGroup } from '@angular/forms'

// importar ngrx
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './services/counter';
import {Observable} from 'rxjs/Observable';

//router
import { Router } from '@angular/router';

// firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-component',
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

  // firebase
  ticketFirebase:any;

  ticketMongo:any;
  errorMessage:any;

  // el contructor crear el listado de tique desde el servicio ticketService
  constructor(
    private ticketService :TicketService, 
    private fb: FormBuilder,
    private store: Store<AppState>,
    private _ngZone: NgZone,
    private router: Router,
    private af: AngularFire
    ) {
      this.ticketService.getTicketsMongo()
          .then(
            ticket => this.ticketMongo = ticket,
            error => this.errorMessage = <any>error
          )

      this.ticketFirebase = af.database.list('/ticket');
      /*
      this.ticketFirebase.push({
          'id': 1, 
          'titulo': 'no me funciona la impresora', 
          'estado': 'in progress'
      });
      this.ticketFirebase.push({
        'id': 2, 
        'titulo': 'no me funciona la computadora', 
        'estado': 'finish'
      });
      this.ticketFirebase.push({
        'id': 3, 
        'titulo': 'no me funciona el celular', 
        'estado': 'in progress'
      });
      this.ticketFirebase.push({
        'id': 4, 
        'titulo': 'no me funciona una lampara', 
        'estado': 'really'
      });
      */
      this.counter = store.select('counter');

      this.tickets = ticketService.getTikets();

      this.myForm = fb.group({
        'name': ['Manuel']
      });

      this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup,
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

  progress: number = 0;
  label: string;

  //sin NgZone
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this._ngZone.run(() => { console.log('Finalizado con Zone!') });
      
      });
    });
  }

  //con NgZone
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado sin Zone!'));
  }
  
  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progreso: ${this.progress}%`);
    
    if (this.progress < 100) {
      window.setTimeout(() => {
        this._increaseProgress(doneCallback);
      }, 10);
    } else {
      doneCallback();
    }
  }

  verMongoTicket(id:number):void{
    this.router.navigate(['/ticket', id]);
  }

  verTicket(id:number):void{
    this.router.navigate(['/ticket', id]);
  }

  //firebase
  //update
  updateTicket(key):void{
    console.log(key);
    this.ticketFirebase.update(key, { estado: 'in progress' });  
  }
  //remove
  removeTicket(key):void{
    console.log(key);
    this.ticketFirebase.remove(key); 
  }
  //remove all
  removeAllTicket():void{
    this.ticketFirebase.remove();
      }

}
