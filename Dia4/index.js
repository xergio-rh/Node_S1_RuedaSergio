



const Persona = require (`./models/persona.js`);
const CuentaBancaria = require (`./models/CuentaBancaria.js`)
const Perro = require ("./models/perro.js")
const Gato = require ("./models/gato.js")
const Pajaro = require ("./models/pajaro.js")
const LineItem = require ("./models/LineItem.js")
const Pedido = require ("./models/pedido.js")
const Autor = require('./models/autor');
const Libro = require('./models/libro');



const pedro = new Persona(`Pedro`,25);
pedro.saludar();

const cuenta = new CuentaBancaria (`Pedro`,1000);
cuenta.depositar(500)
console.log(cuenta.verSaldo())

const animal1 = new Perro("Paco");
animal1.hablar();

const animal2 = new Gato("Mechas");
animal2.hablar();

const animal3 = new Pajaro("Piolin", "Canario");
animal3.hablar()


const pedido1 = new Pedido('P-001');
pedido1.addItem(new LineItem('Manzanas',3,1.2));
pedido1.addItem(new LineItem('Peras',2,1.5));

console.log('Total Pedido:',pedido1.total());



const autor1 = new Autor(1,'Gabriel Garcia Marquez');
const libro1= new Libro('9786287641587','100 años de soledad');
const libro2= new Libro('9789580600015','Amor en los tiempos de cólera');

console.log(libro1);
console.log(autor1);
autor1.agregarLibro(libro1);
autor1.agregarLibro(libro2);
console.log(autor1);
console.log(libro1);