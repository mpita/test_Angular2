import { Directive, ElementRef, Input } from '@angular/core';

@Directive({selector:'[highligt]'})
export class HighligtDirective {
    constructor(el: ElementRef){
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}