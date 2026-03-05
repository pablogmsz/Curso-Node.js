const fs = require("fs");
const colors = require("colors");

// TAREA DEL VÍDEO: HACER LA FUNCIÓN UNA PROMESA.
const makeFile = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        let data = "";
        let cli = "";

        for ( let contador = 1; contador <= hasta; contador++ ) {
            data += `${ base } x ${ contador } = ${ base * contador }\n`;
            cli += `${ base } ${ "x".green } ${ contador } ${ "=".green } ${ base * contador }\n`;
        };
        
        if ( listar ) {
            console.log("================".green);
            console.log("| Tabla del".green, colors.blue( base ), "|".green);
            console.log("================".green);

            console.log(cli);
        };
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, data );
        
        return `tabla-${ base }.txt`;

    } catch (error) {
        throw error;
    };
};

module.exports = {
    /**
     * Tener una propiedad cuyo nombre es el mismo es redundante,
     * por lo que podemos dejar el nombre de la propiedad solo.
     */
    makeFile,
};