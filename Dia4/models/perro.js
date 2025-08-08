const Animal = require ("./Animal")

class Perro extends Animal{
    hablar(){
        console.log(`${this.nombre} esta ladrando.`)
    }

}

module.exports = Perro;
