import { Component, Input } from '@angular/core';

@Component({
    selector: 'input-component',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.css']
})
export class InputComponet{

    @Input() voto:string;

    constructor(){
        // imprime por consola cada vez que se llama a al selector input-componet
        console.log("estoy entrando");
    }
}