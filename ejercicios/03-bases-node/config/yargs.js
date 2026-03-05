const argv = require("yargs")
    .option( "b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar",
    })
    // TAREA DEL VÍDEO.
    .option( "l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla en consola",
    })
    // TAREA DEL VÍDEO.
    .option( "h", {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "Este es el número hasta donde quieres la tabla",
    })
    .check( ( argv, options ) => {
        if ( isNaN( argv.b ) ) {
            throw "La base tiene que ser un número."
        };

        return true;
    })
    .argv;

/**
 * Exportándolo así no lo estaríamos exportando como un objeto si no tal cual.
 * Aunque "argv" funciona como un objeto internamente, pero se entiende la idea.
 */
module.exports = argv;