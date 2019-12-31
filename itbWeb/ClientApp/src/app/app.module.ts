import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';
import { TSturismoComponent } from './tsturismo/tsturismo.component';
import { TSenfermeriaComponent } from './tsenfermeria/tsenfermeria.component';
import { PodologiaComponent } from './podologia/podologia.component';
import { RebFisicaComponent } from './reb-fisica/reb-fisica.component';

//RUTAS

import { APP_ROUTING } from './app.route';
import { EquiposBiomedicosComponent } from './equipos-biomedicos/equipos-biomedicos.component';
import { GerentologiaComponent } from './gerentologia/gerentologia.component';
import { CosmeatriaComponent } from './cosmeatria/cosmeatria.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { AdminEmpresasComponent } from './admin-empresas/admin-empresas.component';
import { DesSoftwareComponent } from './des-software/des-software.component';
import { PlanTransportComponent } from './plan-transport/plan-transport.component';
import { ConduccEscComponent } from './conducc-esc/conducc-esc.component';
import { ModalViewDataComponent } from './modal-view-data/modal-view-data.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';

//SERVICIOS

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BannerComponent,
    BodyComponent,
    TSturismoComponent,
    TSenfermeriaComponent,
    PodologiaComponent,
    RebFisicaComponent,
    EquiposBiomedicosComponent,
    GerentologiaComponent,
    CosmeatriaComponent,
    ContabilidadComponent,
    AdminEmpresasComponent,
    DesSoftwareComponent,
    PlanTransportComponent,
    ConduccEscComponent,
    InfoModalComponent,
    ModalViewDataComponent,
    BeneficiosComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        APP_ROUTING,
        FormsModule,
        RouterModule.forRoot([
            { path: 'head', component: HeadComponent },
            { path: 'banner', component: BannerComponent },
            { path: 'body', component: BodyComponent },
            { path: 'tsTurismo', component: TSturismoComponent },
            { path: 'tsEnfermeria', component: TSenfermeriaComponent },
            { path: 'tsEquipBiomedid', component: EquiposBiomedicosComponent },
            { path: 'tsGerontologia', component: GerentologiaComponent },
            { path: 'tsCosmeatria', component: CosmeatriaComponent },
            { path: 'tsContabilidad', component: ContabilidadComponent },
            { path: 'tsAdminEmpresas', component: AdminEmpresasComponent },
            { path: 'tsPlanTransport', component: PlanTransportComponent },
            { path: 'tsConducc', component: ConduccEscComponent },
            { path: 'ModalData', component: ModalViewDataComponent },
            { path: 'tsDesSoft', component: DesSoftwareComponent },
            { path: 'infoModal', component: InfoModalComponent },
            { path: 'beneficios', component: BeneficiosComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
