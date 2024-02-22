"use strict";

var _impuestos = _interopRequireDefault(require("../js/impuestos.js"));
var _cliente = _interopRequireDefault(require("../js/cliente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cliente1 = new _cliente.default('Ana María Muñoz', new _impuestos.default(54987631, 723911));
const cliente2 = new _cliente.default('Nicole Torres', new _impuestos.default(672451647, 6554425));
const cliente3 = new _cliente.default('Armando Casas', new _impuestos.default(67459812, 8269721));
console.log("".concat(cliente1.nombre, " debe pagar $ ").concat(cliente1.calcularImpuestoAnual()));
console.log("".concat(cliente2.nombre, " debe pagar $ ").concat(cliente2.calcularImpuestoAnual()));
console.log("".concat(cliente3.nombre, " debe pagar $ ").concat(cliente3.calcularImpuestoAnual()));

// console.log (`Nombre cliente: ${cliente1.nombre} | Impuesto anual: ${cliente1.impuesto}`);