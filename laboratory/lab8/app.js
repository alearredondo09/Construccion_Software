// // busca el módulo de fs que es el modulo del file system
// const file_system = require('fs');

// // write file system para escribir codigo asincronico (bloquea todo que pasa en la computadora)
// // el sincrono
// file_system.writeFileSync('hola.txt', 'Hola desde node');

// // Codigo asincrono no va en secuenncia, esto se imprime de acorde al tiempo en el que le dices que se imprime a comparación de los valores que 
// // tiene el arreglo 
// setTimeout(() => {console.log('jojo')}, 20000);
// setTimeout(() => {console.log('jojo')}, 9000);

// const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

// for (let item of arreglo){
//     setTimeout(() => {
//         console.log(item);
//     }, item);
// }

const http = require('http');

//objeto request => tiene la info de la petición http
// objeto response => tiene toda la info de la información que se enviará devuelta
// 
const server = http.createServer( (request, response) => {
    console.log(request.url);
    //enviar respuesta por un header
    response.setHeader('Content-Type', 'text/html');
    // escribir algo en la pag
    response.write('<h1>Hola Mundo!</h1>');
    //enviar respuesta http
    response.end();
    
});

// el servidor esta escuchando por el puerto 3000 (puedes ponerle cualquier numero arriba del 3000)
server.listen(3000);