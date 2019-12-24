import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { TSenfermeriaComponent } from './tsenfermeria/tsenfermeria.component';
import { TSturismoComponent } from './tsturismo/tsturismo.component';
import { PodologiaComponent } from './podologia/podologia.component';
import { EquiposBiomedicosComponent } from './equipos-biomedicos/equipos-biomedicos.component';
import { RebFisicaComponent } from './reb-fisica/reb-fisica.component';
import { GerentologiaComponent } from './gerentologia/gerentologia.component';

const APP_ROUTES: Routes = [

  { path: 'routePath', component: Component },
  { path: 'tsEnfermeria', component: TSenfermeriaComponent },
  { path: 'tsTurismo', component: TSturismoComponent },
  { path: 'tsPodologia', component: PodologiaComponent },
  { path: 'tsEquiposBiomedicos', component: EquiposBiomedicosComponent },
  { path: 'tsRebFisica', component: RebFisicaComponent },
  { path: 'tsGerontologia', component: GerentologiaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
