// consola (log, info, warn, error, assert)
console.log("Aquí no damos spoilers de series/películas a nadie");
console.info("Holaa");
console.warn("No des spoilers de nada o te funan");
console.error("No vayas a cometer el mayor error");
console.assert(1 == 1);
console.assert(1 === "1"); //tipo
console.assert(1 == "1"); //valor
console.assert(1 == true);
console.assert(1 === true);

//variables, constantes
var comestible = "espinaca"; //forma antigua de declarar variables 

let flor = "rosa"; // forma moderna de declarar variables, es más segura y la variable solo vive dentro del ámbito declarado

const precio = 99.99; // para que sea seguro 

// Alcance de las variables
/*for (let i = 0; i <= 10; i++){
    console.log(i); // cuando se acabe el ciclo, la variable i muere entonces no se puede ejecutar fuera del ciclo
}*/

// console.log(i);  esta línea no va a dar pq la i no existe fuera del for

//alert("TE AMO INFINITAMENTE, ERES EL AMOR DE MI ETERNIDAD ❤️");

/*const planta_fav = prompt("Cual es tu planta favorita?");

const tienes_hambre = confirm("Tienes hambre");

// funciones tradicionales
function regar(){
    console.log("Se regaron las plantas");
    return planta_fav;
}

const planta = regar();

// funciones modernas 
// funcion anonimala ultima linea que este dentro de aqui se va a regresar
 () => { }

 //almacena en la localidad de la variable la función la cual regresa console.log
 //asignar una funcion anonima a la variable mi_funcion
const mi_funcion = () => {
console.log("función anónima");
};

// Ejecuta la función anonima por medio del nombre de la variable
mi_funcion();

// undefined, pq los paramatros a una variable no
const suma = (x,y,z) => {
    x + y + z 
};

console.log(suma(1,2,3));

// ARREGLOS
const arreglo = ["Elemento"];
const arreglo2 = new Array();

arreglo.push("Otro elemento");

arreglo[10] = "Uno más"; // en la localidad 10 del arreglo ( actualmente el arreglo solamente tiene 1 localidad, lo que hace es alargar el arreglo hasta tener la cant de localidades )
*/