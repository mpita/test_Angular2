import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';

@Injectable()
export class TicketService {

    miVariableTickectGlobal = "Soy una variable global";

    getTiket() {
        return TICKETS;
    }

    getVariableGlobal():string {
        return this.miVariableTickectGlobal;
    }
}