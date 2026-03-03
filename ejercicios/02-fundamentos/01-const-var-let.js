console.clear();

// var: Crea una variable en ámbito global.
var nombre = "Pablo";

if ( true ) {
    var nombre = "Belén";
}

console.log(nombre);

// let: Crea una variable con "scope" de bloque.
let nombre2 = "Pablo";

if ( true ) {
    nombre2 = "Belén";
}

console.log(nombre2);

/**
 * const: Crea una variable con un valor inmutable (con excepciones).
 * Si contiene un objeto o array, su contenido sigue siendo modificable.
 */
const nombre3 = "Pablo";

if ( true ) {
    const nombre3 = "Belén";
}

console.log(nombre3);