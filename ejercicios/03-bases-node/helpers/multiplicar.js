const fs = require("fs");

// TAREA DEL VÍDEO: HACER LA FUNCIÓN UNA PROMESA.
const makeFile = async ( base = 5 ) => {
    try {
        console.log("===============");
        console.log("| Tabla del", base, "|");
        console.log("===============");
    
        let data = "";
    
        for ( let contador = 1; contador <= 10; contador++ ) {
            data += ( `${ base } x ${ contador } = ${ base * contador }\n` );
        }
    
        console.log(data);
        
        fs.writeFileSync( `tabla-${ base }.txt`, data );
        
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