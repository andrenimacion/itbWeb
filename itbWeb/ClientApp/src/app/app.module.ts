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
    GerentologiaComponent
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
