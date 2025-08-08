



const Persona = require (`./models/persona.js`);
const CuentaBancaria = require (`./models/CuentaBancaria.js`)
const Perro = require ("./models/perro.js")
const Gato = require ("./models/gato.js")



const pedro = new Persona(`Pedro`,25);
pedro.saludar();

const cuenta = new CuentaBancaria (`Pedro`,1000);
cuenta.depositar(500)
console.log(cuenta.verSaldo())

const animal1 = new Perro("Paco");
animal1.hablar();

const animal2 = new Gato("Mechas");
animal2.hablar();