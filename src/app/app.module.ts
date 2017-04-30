import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// importa input component para ser declarado
import { InputComponet } from './input/input.component';

// importar el pipe creado
import { ConversorPipe } from './pipes/conversor.pipe'

@NgModule({
  declarations: [
    AppComponent,
    // se desclara el componente input component
    InputComponet,
    // declaramos el conversor pipe
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
