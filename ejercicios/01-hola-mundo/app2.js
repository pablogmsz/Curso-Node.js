console.clear();
// Esto es una función flecha.
const saludar = ( nombre ) => {
    // Utilizar siempre "backticks".
    return `Saludos ${ nombre }`; // "Saludos " + nombre
};

// Es parecido a escribir la función así, pero no son iguales.
// function saludar2() {
    
// };

console.log( saludar( "Pablo" ) );