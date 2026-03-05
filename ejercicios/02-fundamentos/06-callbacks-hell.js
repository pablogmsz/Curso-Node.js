console.clear();

const empleados = [
    {
        id: 1,
        nombre: "Fernando",
    },
    {
        id: 2,
        nombre: "Linda",
    },
    {
        id: 3,
        nombre: "Karen",
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e =>  e.id === id )?.nombre;

    if ( empleado ) {
        /**
         * Al estar mandando el error como primer argumento, está pillando
         * el empleado como error. Para evitar esto, haremos uso de otro
         * argumento. En este caso siendo "null".
         */
        callback(null, empleado);

    } else {
        callback(`Empleado con id ${ id } no existe.`);
    };
};

// TAREA DEL VÍDEO.
const getSalario = ( id, callback ) => {
    /**
     * El signo "?" es un "null check operator", como su nombre indica es para preguntar
     * si el parámetro que estamos buscando devuelve "undefined" o no.
     */
    const salario = salarios.find( s => s.id === id )?.salario;

    if ( salario ) {
        callback(null, salario);

    } else {
        callback(`Salario con id ${ id } no existe.`);
    };
};

// console.log( getEmpleado( 3 ));

const id = 3;

// Para tener en cuenta los casos de errores, usaremos un parámetro de error.
getEmpleado( id, ( err, empleado ) => {
    if ( err ) {
        return console.log(`¡ERROR!: ${ err }`);
    };

    console.log("¡Empleado existe!");
    console.log(empleado);
});

console.log();

// TAREA DEL VÍDEO.
getSalario( id, ( err, salario ) => {
    if ( err ) {
        return console.log(`¡ERROR!: ${ err }`);
    };

    console.log("¡Salario existe!");
    console.log(salario);
});

console.log();

/**
 * Aquí empieza el "callback hell".
 * Aquí porque solo tenemos 2 funciones. Pero el momento en el que
 * se empiecen a apilar una tras otra, el código se vuelve más complicado
 * de leer y mantener. Es algo que hay que tratar de evitar.
 */
getEmpleado( id, ( err, empleado ) => {
    if ( err ) {
        return console.log(`¡ERROR!: ${ err }`);
    };

    getSalario( id, ( err, salario ) => {
        if ( err ) {
            return console.log(`¡ERROR!: ${ err }`);
        };

        console.log(`El empleado ${ empleado } tiene un salario de: ${ salario } $.`);
    });
});