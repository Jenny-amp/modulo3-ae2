
// Creamos un array vacío para guardar los números
let numeros = [];


// Pedimos al usuario ingresar 3 números

let numero1 = parseFloat(prompt("Ingrese el primer número"));

let numero2 = parseFloat(prompt("Ingrese el segundo número"));

let numero3 = parseFloat(prompt("Ingrese el tercer número"));


// Agregamos los números al array

numeros.push(numero1);

numeros.push(numero2);

numeros.push(numero3);


// Variable para saber si hubo cambios

let huboCambios;


// Bubble Sort usando do while

do{

    // Al comenzar asumimos que no hubo cambios
    huboCambios = false;


    // Recorremos el array
    for(let i = 0; i < numeros.length - 1; i++){

        // Preguntamos:
        // ¿el número actual es mayor que el siguiente?

        if(numeros[i] > numeros[i + 1]){

            // Guardamos temporalmente el número actual
            let temporal = numeros[i];

            // Intercambiamos posiciones
            numeros[i] = numeros[i + 1];

            numeros[i + 1] = temporal;

            // Indicamos que sí hubo intercambio
            huboCambios = true;

        }

    }

}while(huboCambios);


// El menor queda al inicio
let menor = numeros[0];


// El mayor queda al final
let mayor = numeros[numeros.length - 1];


// Si el menor y el mayor son iguales,
// significa que los 3 números son iguales

if(menor === mayor){

    alert("Los tres números son iguales");

}else{

    alert("Arreglo ordenado: " + numeros);

    alert("Menor: " + menor);

    alert("Mayor: " + mayor);

}
