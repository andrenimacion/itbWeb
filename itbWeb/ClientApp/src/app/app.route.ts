import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { TSenfermeriaComponent } from './tsenfermeria/tsenfermeria.component';
import { TSturismoComponent } from './tsturismo/tsturismo.component';
import { PodologiaComponent } from './podologia/podologia.component';
import { EquiposBiomedicosComponent } from './equipos-biomedicos/equipos-biomedicos.component';
import { RebFisicaComponent } from './reb-fisica/reb-fisica.component';
import { GerentologiaComponent } from './gerentologia/gerentologia.component';
import { CosmeatriaComponent } from './cosmeatria/cosmeatria.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { AdminEmpresasComponent } from './admin-empresas/admin-empresas.component';
import { DesSoftwareComponent } from './des-software/des-software.component';
import { PlanTransportComponent } from './plan-transport/plan-transport.component';
import { ConduccEscComponent } from './conducc-esc/conducc-esc.component';

const APP_ROUTES: Routes = [

  { path: 'routePath', component: Component },
  { path: 'tsEnfermeria', component: TSenfermeriaComponent },
  { path: 'tsTurismo', component: TSturismoComponent },
  { path: 'tsPodologia', component: PodologiaComponent },
  { path: 'tsEquiposBiomedicos', component: EquiposBiomedicosComponent },
  { path: 'tsRebFisica', component: RebFisicaComponent },
  { path: 'tsGerontologia', component: GerentologiaComponent },
  { path: 'tsCosmeatria', component: CosmeatriaComponent },
  { path: 'tsContabilidad', component: ContabilidadComponent },
  { path: 'tsAdminEmpresas', component: AdminEmpresasComponent },
  { path: 'tsDesSoft', component: DesSoftwareComponent },
  { path: 'tsPlanTransport', component: PlanTransportComponent },
  { path: 'tsConducc', component: ConduccEscComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
