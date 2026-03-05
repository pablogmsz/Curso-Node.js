console.clear();

// function sumar( a, b) {
//     return a + b;
// };

// Esto sería una función flecha.
// const sumar = ( a, b = 10 ) => {
//     return a + b;
// };

/**
 * En las funciones flecha, si solo tienen una línea de código y esa línea
 * es el "return", entonces podemos borrar tanto el "return", como las llaves.
 */
const sumar = ( a, b = 10 ) =>  a + b;

// Si tenemos una función que no requiere de argumentos entonces no se ponen los parámetros.
const saludar = () => "Hola mundo";

console.log( sumar(5) );
console.log( saludar() );