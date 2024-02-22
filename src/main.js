import Impuesto from "./impuestos.js";
import Cliente from "./cliente.js";

const cliente1 = new Cliente('Ana María Muñoz', new Impuesto(54987631,723911));
const cliente2 = new Cliente('Nicole Torres', new Impuesto(672451647,6554425));
const cliente3 = new Cliente('Armando Casas', new Impuesto(67459812,8269721));

console.log(`${cliente1.nombre} debe pagar $ ${cliente1.calcularImpuestoAnual()}`);
console.log(`${cliente2.nombre} debe pagar $ ${cliente2.calcularImpuestoAnual()}`);
console.log(`${cliente3.nombre} debe pagar $ ${cliente3.calcularImpuestoAnual()}`);


// console.log (`Nombre cliente: ${cliente1.nombre} | Impuesto anual: ${cliente1.impuesto}`);
