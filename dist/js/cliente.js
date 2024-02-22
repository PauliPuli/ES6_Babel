"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// import {Impuesto} from "./impuestos.js"
class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }
  get impuesto() {
    return this._impuesto;
  }
  set impuesto(nuevo_impuesto) {
    this._impuesto = nuevo_impuesto;
  }
  calcularImpuestoAnual() {
    return "".concat((this.impuesto.MontoBrutoAnual - this.impuesto.deducciones) * 0.21);
  }
}
var _default = exports.default = Cliente;