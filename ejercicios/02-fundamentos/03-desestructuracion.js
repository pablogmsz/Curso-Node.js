console.clear();

// Esto es un objeto que estamos creando.
const pablo = {
    nombre: "Pablo",
    apellido: "Gómez",
    poder: "suerte",
    edad: 24,

    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
    }
}

// console.log( pablo.getNombre() );

// const nombre    = pablo.nombre;
// const apellido  = pablo.apellido;
// const poder     = pablo.poder;

// console.log(nombre, apellido, poder);

// Con la desestructuración es más fácil el extraer propiedades de los objetos.
// const { nombre, apellido, poder, edad = 0 } = pablo;

// console.log(nombre, apellido, poder, edad);

// function imprimePersona( persona ) {
//     const { nombre, apellido, poder, edad = 0 } = persona;
//     console.log(nombre, apellido, poder, edad);
// }

// Con la desestructuración, podemos desestructurar directamente el objeto en los argumentos.
function imprimePersona( { nombre, apellido, poder, edad = 0 } ) {
    nombre = "Belén";
    console.log(nombre, apellido, poder, edad);
}

imprimePersona( pablo );

const personas = ["Pablo", "Belén", "Cristian"];

// const p1 = personas[0];
// const p2 = personas[1];
// const p3 = personas[2];

// Desestructuración en un array.
// const [ p1, p2, p3 ] = personas;

// Si solo queremos uno de los elementos del array, se haría de la siguiente forma:
const [ , , p3 ] = personas;

console.log(p3);