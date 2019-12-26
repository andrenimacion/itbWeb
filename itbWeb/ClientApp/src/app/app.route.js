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
var cosmeatria_component_1 = require("./cosmeatria/cosmeatria.component");
var contabilidad_component_1 = require("./contabilidad/contabilidad.component");
var admin_empresas_component_1 = require("./admin-empresas/admin-empresas.component");
var des_software_component_1 = require("./des-software/des-software.component");
var plan_transport_component_1 = require("./plan-transport/plan-transport.component");
var conducc_esc_component_1 = require("./conducc-esc/conducc-esc.component");
var APP_ROUTES = [
    { path: 'routePath', component: core_1.Component },
    { path: 'tsEnfermeria', component: tsenfermeria_component_1.TSenfermeriaComponent },
    { path: 'tsTurismo', component: tsturismo_component_1.TSturismoComponent },
    { path: 'tsPodologia', component: podologia_component_1.PodologiaComponent },
    { path: 'tsEquiposBiomedicos', component: equipos_biomedicos_component_1.EquiposBiomedicosComponent },
    { path: 'tsRebFisica', component: reb_fisica_component_1.RebFisicaComponent },
    { path: 'tsGerontologia', component: gerentologia_component_1.GerentologiaComponent },
    { path: 'tsCosmeatria', component: cosmeatria_component_1.CosmeatriaComponent },
    { path: 'tsContabilidad', component: contabilidad_component_1.ContabilidadComponent },
    { path: 'tsAdminEmpresas', component: admin_empresas_component_1.AdminEmpresasComponent },
    { path: 'tsDesSoft', component: des_software_component_1.DesSoftwareComponent },
    { path: 'tsPlanTransport', component: plan_transport_component_1.PlanTransportComponent },
    { path: 'tsConducc', component: conducc_esc_component_1.ConduccEscComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.route.js.map