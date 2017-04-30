import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'input-component',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.css']
})
export class InputComponet{

    @Input() voto:string;
    @Output() addVoto = new EventEmitter<string>();

    constructor(){
        // imprime por consola cada vez que se llama a al selector input-componet
        console.log("estoy entrando");
    }

    // funcion que captura el evento votar
    votar():void {
        this.addVoto.emit(this.voto);
    }
}