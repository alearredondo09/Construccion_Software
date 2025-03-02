function operaciones() {
    let numero = parseInt(prompt("Problema 1: Dame un número: "));
    let resultado = "<table border='4'>";
    resultado += "<tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>"; // Encabezado de la tabla

    for (var i = 1; i <= numero; i++) {
        let cuadrado = i * i;
        let cubo = i * i * i;
        resultado += `<tr>
            <td style="text-align:center">${i}</td>
            <td style="text-align:center">${cuadrado}</td>
            <td style="text-align:center">${cubo}</td>
        </tr>`;
    }
    resultado += "</table>";
    document.getElementById("operacion").innerHTML = resultado;
};

function random(){
    let num1 = Math.floor(Math.random() * 1000);
    let num2 = Math.floor(Math.random() * 1000);
    // mostrar los numeros en la página
    alert(`Problema 2: Los números a sumar son ${num1} y ${num2}`); 
    let date1 = new Date().getTime();
    let sumaRespuesta = parseFloat(prompt('Problema 2: Cuál es la suma de estos números?:  ')); // convierte un string a numero
    let date2 = new Date().getTime();
    let suma = num1 + num2;
    let tiempo_final = (date2 - date1)/1000;
    if (sumaRespuesta === suma){
        document.getElementById("resul").innerHTML += 'Correeeeecto'; //innerHTML permite leer o modificar el contenido HTML de un elemento en la página
    } else {
        document.getElementById("resul").innerHTML += `Incorreeeecto. La respuesta correcta es ${suma}`;
    }
    document.getElementById("resul").innerHTML += `<br>El tiempo tomado en contestar fue de: ${tiempo_final} segundos`;
};

function problema3(){
    let arr = [];
    let neg = 0, pos = 0, ceros = 0;
    let numeros = parseInt(prompt("Problema 3: Dame cuantos numeros quieres: "));
    for (var i = 0; i < numeros; i++){
        let num = parseFloat(prompt("Dame el num: "));
        arr.push(num);
        if (num < 0){
            neg++;
        } else if (num === 0){
            ceros++;
        } else{
            pos++;
        }
    }
    document.getElementById("problem3").innerHTML += `El arreglo tiene ${ceros} ceros, ${neg} números negativos y ${pos} números positivos`;
};

//checar esto
function problema4(){
    let matrix = [], resultado = [];
    let rows = parseInt(prompt("Problema 4: Filas?: "));
    let column = parseInt(prompt("Problema 4: Columnas?: "));
    for (let i = 0; i < rows; i++){
        matrix[i] = []
        let sumaFila = 0;
        for (let j = 0; j < column; j++){
            let num = parseFloat(prompt("Dame un num: "));
            matrix[i].push(num);
            sumaFila += num;
        }
        let promedioFila = sumaFila / column
        resultado.push(promedioFila);
    } 
    document.getElementById("problema4").innerHTML += `Arreglo con los promedios de cada fila: [${resultado.join(", ")}]`;

};

function problem5(){
    let res = 0;
    let num = parseInt(prompt("Problema 5: Dame un numero a invertir: "));
    while (num >= 0){
        let digit = (num % 10);
        res = res * 10 + digit;
        num = Math.floor(num / 10); //para redondear numeros
    }
    document.getElementById("problema5").innerHTML += `El numero invertido es: ${res}`;    
};

function problema6() {
    let kids = [];
    let cookies = [];
    let maximizedGreed = 0;

    let numberKids = parseInt(prompt("Give me the number of kids: "));
    for (let i = 0; i < numberKids; i++) {
        let greed = parseInt(prompt(`Greed of kid ${i + 1}: `));
        kids.push(greed);
    }

    let numberCookies = parseInt(prompt("Give me the number of cookies: "));
    for (let j = 0; j < numberCookies; j++) {
        let size = parseInt(prompt(`Size of cookie ${j + 1}: `));
        cookies.push(size);
    }

    // Ordenar de menor a mayor
    kids.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);

    let k = 0, l = 0;
    while (k < kids.length && l < cookies.length) {
        if (cookies[l] >= kids[k]) {
            maximizedGreed++;
            k++;
        }
        l++;
    }

    // Crear un objeto para almacenar el resultado
    let resultObject = {
        message: `La cantidad máxima de niños contentos es de ${maximizedGreed}`,
        totalKids: numberKids,
        totalCookies: numberCookies,
        happyKids: maximizedGreed
    };

    document.getElementById("problem6").innerHTML += resultObject.message;
};


window.onload = function() {
    operaciones;
    random;
    problema3;
    problema4;
    problem5;
    problema6();
};
