console.clear();
console.log("Inicio de programa"); // 1

setTimeout( () => {
    console.log("Primer Timeout"); // 5
}, 3000 );

setTimeout( () => {
    console.log("Segundo Timeout"); // 2
}, 0 );

setTimeout( () => {
    console.log("Tercer Timeout"); // 3
}, 0 );

console.log("Fin de programa"); // 4 :: 2

/**
 * Se ejecuta el "Fin de programa" antes que los "timeouts",
 * porque JavaScript y Node trabajan de forma que estas funciones
 * (callbacks) las establecen en una pila de ejecución. Cuando se 
 * ejecutan las milésimas de segundo, el "callback" va a caer en un
 * stack de procedimientos que tiene que ejecutar.
 */