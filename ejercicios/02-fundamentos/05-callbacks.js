console.clear();

// Un "callback" es una función que se ejecuta eventualmente cuando la función primaria diga de hacerlo.
setTimeout( () => {
    console.log("Hola Mundo");
}, 1000 );

const getUsuarioByID = ( id, callback ) => {
    const user = {
        id,
        nombre: "Pablo",
    };

    setTimeout( () => {
        // Aquí el parámetro "callback" será sustituido por la función que se pase como argumento.
        callback(user);
    }, 1500 );
}

// En mucha documentación y paquetes de Node.js, veremos que se pasa como argumento una función.
getUsuarioByID( 10, ( usuario ) => {
    console.log( usuario.id );
    console.log( usuario.nombre.toUpperCase() );
});