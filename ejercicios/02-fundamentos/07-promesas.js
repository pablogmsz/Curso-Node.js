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

const getEmpleado = ( id ) => {
    // No hace falta declarar una variable para la promesa, podemos devolverla directamente.
    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( e =>  e.id === id )?.nombre;

        // Con operador ternario queda más limpio el código.
        empleado ? resolve( empleado ) : reject( `No existe empleado con id ${ id }.` );
    });
}

// TAREA DEL VÍDEO.
const getSalario = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;

        salario ? resolve( salario ) : reject( `No existe salario con id ${ id }.` );
    });
}

const id = 3;

// getEmpleado( id )
//     .then( empleado => console.log(empleado) )
//     .catch( err => console.log(err) );

// TAREA DEL VÍDEO.
// getSalario( id )
//     .then( salario => console.log(salario) )
//     .catch( err => console.log(err) );

// Esto sería otro "callback hell" o "promise hell".
getEmpleado( id )
    .then( empleado => {
        getSalario( id )
            .then( salario => {
                console.log(`El empleado: ${ empleado } tiene un salario de: ${ salario } $.`);
            })
            .catch( err => console.log(err) );
    })
    .catch( err => console.log(err) );

// Aquí vamos a arreglar este desastre con promesas en cadena.
let nombre;

getEmpleado( id )
    // Podemos concatenar los "then".
    .then( empleado => {
        nombre = empleado;
        return getSalario( id )
    })
    .then( salario => console.log(`El empleado ${ nombre } tiene un salario de ${ salario } $.`) )
    // para capturar las excepciones, usaremos un "catch" global.
    .catch( err => console.log( err ) );