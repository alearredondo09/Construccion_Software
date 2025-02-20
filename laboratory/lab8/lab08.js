
// Una función que reciba un arreglo de números y devuelva su promedio.
const arreglo = [30, 28, 983, 278, 390, 267, 489, 398, 1289];
function cal_promedio(arreglo){
    let promedio = 0;
    let arr_lon = arreglo.length;
    
    for (let i = 0; i < arreglo.length; i++){
        promedio += arreglo[i];
        // console.log(promedio );
    };

    promedio = promedio / arr_lon;
    console.log(`El promedio del arreglo es: ${promedio.toFixed(2)}`);
}

// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
const texto = 'Laboratorio de Lalo LOL';
function imprimir_string(texto){
    const file_system = require('fs');
    file_system.writeFileSync('string.txt', texto);
};

cal_promedio(arreglo);
imprimir_string(texto);