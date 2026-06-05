//variable = nombre + tipo de datos + valor

//'' comillas simples
//"" comillas dobles
//`` backtick
let x = `25 + 1`
console.log(x, typeof x);

let saludo = 'Hola';
let nombre = "FabiánF";

let saludoCompleto = saludo + ' "amigo" ' + nombre;
let saludoTemplateString = `${saludo} 'amigo uno' ${nombre}`;

console.log(saludoTemplateString);

let edadcirijillo; //declarar variables
edadcirijillo = 18; // inicializar variable

const apellido = "Torres";

let uno, dos, tres = 0; //creación de variables multiples.

let CamelCase; //PascalCase - cada palabla empieza con máyuscula (capitalizar) - Clases de Objetos.
let lowerCamelCase; // la primera palabra empieza con minuscula, las siguientes con mayuscula - Se usa principalmente nombre de variables y funciones
let snake_case; //separa las palabras con guión bajo.
let notacion = `kebab-case`; //separa las palabras con guión medio. - para clases de css
let inpEmail // añadir prefijo del tipo datos, o del tipo de elemento - variables
let intEdad
let SCREAMING_SNAKE_CASE; //UPPER SNAKE CASE es lo mismo que el snakecase, pero todo en mayusculas - variables de entorno o constantes globales.

// variable a guarda edad
let a = 18 // mala practica,

let edad = 18; // usar nombres descriptivos, caracteres de nombre permitido [a-z][A-Z] _ $

console.log(nombre.length);
console.log(nombre.charAt(nombre.length-1));
console.log(saludoTemplateString.split(' ').join('|'));
console.log(nombre.indexOf('F'))

//* / + - %

let division = 5 % 2

console.log('modulo', division);


// if("5" == 5) // true
// if("5" === 5) // falso
// !true //false
// && //AND 

//|| //OR

//! //negacion, contrario o NOT


let saludando = 'no';

if(true){
    let saludando = "holiwis"
}

console.log(saludando)

