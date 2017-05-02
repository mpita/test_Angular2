import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { PageNotFoundComponent } from '../notFound/page.not.found.component';

// importamos ticket detail
import { TicketDetail } from '../tickets/ticket.detail'

// importando el update component
import { UpdateComponent } from '../update/update.component';

export const APPROUTER: Routes = [
  { path: '', component: AppComponent },
  { path: 'ticket/:id', component: TicketDetail },
  { path: 'update/:id', component: UpdateComponent },
  { path: '**', component: PageNotFoundComponent }
];