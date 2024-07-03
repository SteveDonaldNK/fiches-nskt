import { Routes } from '@angular/router';
import { ArmeComponent } from './arme/arme.component';
import { DrogueComponent } from './drogue/drogue.component';
import { IndividuComponent } from './individu/individu.component';
import { ObjetComponent } from './objet/objet.component';

export const routes: Routes = [
    { path: 'arme', component: ArmeComponent },
    { path: 'drogue', component: DrogueComponent },
    { path: 'individu', component: IndividuComponent },
    { path: 'objet', component: ObjetComponent },
];
