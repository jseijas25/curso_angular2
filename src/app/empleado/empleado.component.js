"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmpleadoComponent = (function () {
    function EmpleadoComponent() {
        this.nombre = 'Jose Luis';
        this.apellido = 'Seijas';
        this.genero = 'Masculino';
        this.edad = 23;
    }
    return EmpleadoComponent;
}());
EmpleadoComponent = __decorate([
    core_1.Component({
        selector: 'empleado',
        templateUrl: 'app/empleado/empleado.component.html'
    })
], EmpleadoComponent);
exports.EmpleadoComponent = EmpleadoComponent;
//# sourceMappingURL=empleado.component.js.map