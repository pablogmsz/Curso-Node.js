// Importamos la librería para escribir en archivos.
// const fs = require("fs");
const { makeFile } = require("./helpers/multiplicar.js");

console.clear();

// console.log("===============");
// console.log("| Tabla del 5 |");
// console.log("===============");

const base = 3;

makeFile( base )
    .then( nameFile => console.log(nameFile, "creado."))
    .catch( err => console.log(err) );

// let data = "";

// for ( let contador = 1; contador <= 10; contador++ ) {
//     data += ( `${ base } x ${ contador } = ${ base * contador }\n` );
// }

// console.log(data);

/**
 * Esta es la función para poder escribir en un archivo el contenido que deseamos.
 * Esta función en cuestión es asíncrona.
 */
// fs.writeFile( `tabla-${ base }.txt`, data, ( err ) => {
//     if ( err ) throw err;

//     console.log(`tabla-${ base }.txt creado.`);
// })

/**
 * La otra versión, "writeFileSync" es que es una función síncrona, es decir,
 * hasta que no se ejecuta, el código no continúa. Además de que si hay un error,
 * habría que atraparlo en un bloque "try-catch".
 */
// fs.writeFileSync( `tabla-${ base }.txt`, data );

// console.log(`tabla-${ base }.txt creado.`);