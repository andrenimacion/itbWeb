"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var tsenfermeria_component_1 = require("./tsenfermeria/tsenfermeria.component");
var tsturismo_component_1 = require("./tsturismo/tsturismo.component");
var podologia_component_1 = require("./podologia/podologia.component");
var equipos_biomedicos_component_1 = require("./equipos-biomedicos/equipos-biomedicos.component");
var reb_fisica_component_1 = require("./reb-fisica/reb-fisica.component");
var gerentologia_component_1 = require("./gerentologia/gerentologia.component");
var APP_ROUTES = [
    { path: 'routePath', component: core_1.Component },
    { path: 'tsEnfermeria', component: tsenfermeria_component_1.TSenfermeriaComponent },
    { path: 'tsTurismo', component: tsturismo_component_1.TSturismoComponent },
    { path: 'tsPodologia', component: podologia_component_1.PodologiaComponent },
    { path: 'tsEquiposBiomedicos', component: equipos_biomedicos_component_1.EquiposBiomedicosComponent },
    { path: 'tsRebFisica', component: reb_fisica_component_1.RebFisicaComponent },
    { path: 'tsGerontologia', component: gerentologia_component_1.GerentologiaComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.route.js.map