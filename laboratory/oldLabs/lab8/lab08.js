// PROBLEMA 1 
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

// PROBLEMA 2
// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
const texto = 'Laboratorio de Lalo LOL';
function imprimir_string(texto){
    const file_system = require('fs');
    file_system.writeFileSync('string.txt', texto);
};


// PROBLEMA 3
// Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.

let s="alejandra";
let t="hola";

function anagram(s, t) {
    let count = new Array(26).fill(0);

    for(let i=0;i<s.length;i++) {
        count[s.charCodeAt(i) - 97]++;
    }
    for(let i=0;i<t.length;i++) {
        count[t.charCodeAt(i) - 97]--;
    }

    for(let i=0;i<count.length;i++) {
        if(count[i]!=0) {
            return false;
        }
    }
    return true;
}

// PROBLEMA 4

const  html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap Example</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    <body>
        <div class="container mt-4">
            <form>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputUser" class="col-form-label">Username</label>
                    </div>
                    <div class="col-auto">
                        <input type="text" id="inputUser" class="form-control" aria-describedby="userHelpInline">
                    </div>
                    <div class="col-auto">
                        <span id="userHelpInline" class="form-text">
                            Must be 8-20 characters long
                        </span>
                    </div>
                </div>

                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword">
                    </div>
                </div>
            </form>

            <label for="exampleColorInput" class="form-label">Color picker</label>
            <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">

            <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input class="form-control" type="file" id="formFile">
            </div>

            <label for="exampleDataList" class="form-label">Datalist example</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
            <datalist id="datalistOptions">
                <option value="San Francisco">
                <option value="New York">
                <option value="Seattle">
                <option value="Los Angeles">
                <option value="Chicago">
            </datalist>

            <h4 class="text-center mt-4">Comparación de idiomas</h4>
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>Español</th>
                        <th>Inglés</th>
                        <th>Coreano</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hola</td>
                        <td>Hello</td>
                        <td>안녕하세요</td>
                    </tr>
                    <tr>
                        <td>Adiós</td>
                        <td>Goodbye</td>
                        <td>안녕히 계세요</td>
                    </tr>
                    <tr>
                        <td>¿Cómo estás?</td>
                        <td>How are you?</td>
                        <td>어떻게 지내세요</td>
                    </tr>
                </tbody>
            </table>
            <p class="fw-semibold">Describe Material design:</p>
            <p>
                Material is a design system created by Google to help teams build high-quality digital experiences for Android, iOS, Flutter, and the web. 
                It is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. It is inspired by
                the physical world and its textures, including how they reflect light and cast shadows. Material surfaces reimagine the mediums of paper and ink.
    
                Materials color system is an organized approach to applying color to a UI. Global color styles have semantic names and defined usage in components
                primary, secondary (brand colors), surface, background, and error. Every color also has a complementary color used for elements placed “on” top of
                 it to promote consistency and accessible contrast.
            </p>
        </div>       

        <!-- Bootstrap JS Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
</html>
`

const http = require('http');
const server = http.createServer((request, response) => {
    response.write(html);
    response.end();
})

server.listen(3000);


cal_promedio(arreglo);
imprimir_string(texto);
console.log(anagram(s, t));