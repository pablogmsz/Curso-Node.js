const fs = require("fs");

const file = "./db/data.json";

const saveDB = ( data ) => {
    // Con "JSON.stringify" convierte un objeto/array en un "string" en formato JSON.
    fs.writeFileSync( file, JSON.stringify(data) );
};

const readDB = () => {
    // Comprobamos que exista el archivo.
    if ( !fs.existsSync(file) ) {
        return null;
    };

    const info = fs.readFileSync(file, { encoding: "utf-8" } );

    // Parsea el JSON a un objeto de JavaScript.
    const data = JSON.parse(info);

    return data;
};

module.exports = {
    saveDB,
    readDB,
};