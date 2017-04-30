import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// importa input component para ser declarado
import { InputComponet } from './input/input.component';

// importar el pipe creado
import { ConversorPipe } from './pipes/conversor.pipe'

// importar las directive gigant y highlight
import { GigantDirective } from './directives/gigant.directive'
import { HighligtDirective } from './directives/highlight.directive'

// importamos el servicio Ticket
import { TicketService } from './services/ticket.service'

@NgModule({
  declarations: [
    AppComponent,
    // se desclara el componente input component
    InputComponet,
    // declaramos el conversor pipe
    ConversorPipe,
    // declarando las directivas GigantDirective y HighligtDirective
    GigantDirective,
    HighligtDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // importamos los reactive forms
    ReactiveFormsModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
