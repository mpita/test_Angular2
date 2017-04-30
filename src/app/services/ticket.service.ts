import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';

@Injectable()
export class TicketService {

    miVariableTickectGlobal = "Soy una variable global";

    getTikets() {
        return TICKETS;
    }

    getVariableGlobal():string {
        return this.miVariableTickectGlobal;
    }

    getTicket(id:number) {
        let ticket = TICKETS.find(x => x.id == id);
        return ticket;
    }
}