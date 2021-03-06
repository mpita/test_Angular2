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
import { GigantDirective } from './directives/gigant.directive';
import { HighligtDirective } from './directives/highlight.directive';

// importamos el servicio Ticket
import { TicketService } from './services/ticket.service';

// importar ngrx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './services/counter';

// importar router
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';
import { PageNotFoundComponent } from './notFound/page.not.found.component';
import { InitComponent } from './init.component';

// importamos ticket detail
import { TicketDetail } from './tickets/ticket.detail';

// importando el update component
import { UpdateComponent } from './update/update.component';

// firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "you-apiKey",
  authDomain: "you-authDomain",
  databaseURL: "you-databaseURL",
  projectId: "you-projectId",
  storageBucket: "you-storageBucket",
  messagingSenderId: "you-apiKey"
}

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    // se desclara el componente input component
    InputComponet,
    // declaramos el conversor pipe
    ConversorPipe,
    // declarando las directivas GigantDirective y HighligtDirective
    GigantDirective,
    HighligtDirective,
    // declarando la directiva page not found
    PageNotFoundComponent,
    InitComponent,
    // declaramos el ticket detail
    TicketDetail,
    // declarando update component
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // importamos los reactive forms
    ReactiveFormsModule,
    // declarando la importacion ngrx
    StoreModule.provideStore({ counter: counterReducer }),
    // declarando el modulo routes
    RouterModule.forRoot(APPROUTER),
    // importando la configuracion de fire base
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }
