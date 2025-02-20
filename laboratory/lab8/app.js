// busca el módulo de fs que es el modulo del file system
const file_system = require('fs');

// write file system para escribir codigo asincronico (bloquea todo que pasa en la computadora)
// el sincrono
file_system.writeFileSync('hola.txt', 'Hola desde node');

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}