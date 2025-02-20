
// Una función que reciba un arreglo de números y devuelva su promedio.
const arreglo = [30, 28, 983, 278, 390, 267, 489, 398, 1289];
let promedio = 0;
let arr_lon = arreglo.length;

for (let i = 0; i < arreglo.length; i++){
    promedio += arreglo[i];
    console.log(promedio );
};
console.log(promedio = promedio / arr_lon);

console.log(promedio.toFixed(2));