"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//Component imports
const car_component_1 = require("./car.component");
const cardetail_component_1 = require("./cardetail.component");
const info_component_1 = require("./info.component");
const theme_component_1 = require("./theme.component");
const cal_component_1 = require("./cal.component");
//Service imports
const cal_service_1 = require("./cal.service");
const math_service_1 = require("./math.service");
const joke_service_1 = require("./joke.service");
const data_service_1 = require("./data.service");
const calculator_service_1 = require("./calculator.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        providers: [
            data_service_1.DataService,
            joke_service_1.JokeService,
            { provide: 'calculator', useClass: calculator_service_1.CalculatorService },
            { provide: 'simpleCalculator', useClass: math_service_1.MathService },
            { provide: 'easyCalculator', useClass: cal_service_1.CalService }
        ],
        //providers:[{provide:'ICalService',useClass:MathService}],
        //providers:[{provide:'ICalService',useClass:CalService}],
        //providers:[CalService],
        declarations: [
            cal_component_1.CalComponent,
            theme_component_1.ThemeComponent,
            info_component_1.InfoComponent,
            car_component_1.CarComponent,
            cardetail_component_1.CarDetailComponent
        ],
        bootstrap: [cal_component_1.CalComponent]
    })
], AppModule);
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map