const { makeFile } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs.js");
require("colors");

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log("base: yargs", argv.b);

/**
 * Sirve para devolver un array que contiene los comandos pasados por la terminal
 * cuando el proceso Node.js haya sido lanzado.
 */
// const [ , , arr3 = "base=5" ] = process.argv;
// const [ , base = 5] = arr3.split( "=" );

// const base = 3;

makeFile( argv.b, argv.l, argv.h )
    .then( nameFile => console.log(nameFile.rainbow, "creado."))
    .catch( err => console.log(err) );