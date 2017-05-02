import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


// importamos el modulo de http y response para poder tomar los datos en el back
import {Http, Response } from '@angular/http';

@Injectable()
export class TicketService {

    miVariableTickectGlobal = "Soy una variable global";

    // url del backend
    urlBackEnd = "http://localhost:3000/"

    constructor(private http: Http) {
        
    }

    getTicketsMongo():Promise<any[]>{
        return this.http.get(this.urlBackEnd + 'tickets')
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }

    getTicketMongo(id:number):Promise<any[]>{
        return this.http.post(this.urlBackEnd + 'ticket',{"id": id})
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        console.log("body", body);
        if (body.status == 200){
            return body.result;
        } 
        else {
            return {};
        }
    }

    private handleError(error: Response | any) {
        let errMsg:string;
        if(error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
    }

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

    getTicketObserver(id) {
        return Observable.create(observer => {
            setTimeout(() => {
            observer.next(TICKETS.find((ticket) => ticket.id == id))
        }, 3000);
    });
  }
}