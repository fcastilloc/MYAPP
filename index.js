//own modules
const {iva, ivaVehiculos, ivaCanastaFamiliar} = require("./modules/iva");
const log = require("./modules/logs");

//third party modules
const faker = require("faker");

console.log(`el valor del iva es ${iva}%`);
console.log(`el valor del iva para vehiculos es ${ivaVehiculos}%`);
console.log(`el valor del iva para la canasta familiar es ${ivaCanastaFamiliar}%`);
log.info(faker.name.jobDescriptor());

if (ivaCanastaFamiliar > 0){
    log.error("La canasta familiar no puede llevar iva");
}else
log.info("Exitoso");
