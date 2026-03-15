const inquirer = require("inquirer");
const { default: CheckboxPrompt } = require("inquirer/lib/prompts/checkbox");
const { validate } = require("uuid");
require("colors");

const questions = [
    {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
            {
                value: 1,
                // TAREA DEL VÍDEO: CAMBIAR COLOR DE LOS NÚMEROS.
                name: `${ "1.".green } Create a task`,
            },
            {
                value: 2,
                name: `${ "2.".green } List tasks`,
            },
            {
                value: 3,
                name: `${ "3.".green } List completed tasks`,
            },
            {
                value: 4,
                name: `${ "4.".green } List pending tasks`,
            },
            {
                value: 5,
                name: `${ "5.".green } Complete task(s)`,
            },
            {
                value: 6,
                name: `${ "6.".green } Delete a task`,
            },
            {
                value: 0,
                name: `${ "0.".green } Logout`,
            },
        ],
    },
];

const inquirerMenu = async () => {
    console.clear();
    console.log("============================".green);
    console.log("      Select an option".white);
    console.log("============================\n".green);
    
    /**
     * Como es un objeto, desestructuramos el campo "option" (definido en name),
     * para obtener directamente el "value" que el usuario seleccionó.
    */
    const { option } = await inquirer.prompt(questions);

    return option;
};

// TAREA DEL VÍDEO.
const pause = async () => {
    const pauseQuestion = [
        {
            type: "input",
            name: "enter",
            message: `Press ${ "ENTER".green } to continue.`,
        },
    ];

    console.log();
    await inquirer.prompt(pauseQuestion);
};

const readInput = async ( message ) => {
    const readInputQuestion = [
        {
            type: "input",
            name: "desc",
            message,
            /**
             * El "validate" proviene de la misma librería que "uuid", se encarga
             * de validar que el usuario ha introducido algún valor y no le ha dado
             * al enter simplemente.
             */
            validate( value ) {
                if ( value.length === 0 ) {
                    return "Please enter a value";
                };

                return true;
            },
        },
    ];

    const { desc } = await inquirer.prompt(readInputQuestion);
    return desc;
};

const deleteTaskList = async ( tasks = [] ) => {
    /**
     * El método "map" me devuelve un nuevo array transformando
     * los hijos a lo que yo quiera.
     */
    const choices = tasks.map( ( task, i ) => {
        const idx = `${i + 1}.`.green;

        return {
            value: task.id,
            name: `${ idx } ${ task.desc }`,
        };
    });

    // El método "unshift" sirve para añadir un elemento al inicio de un array.
    choices.unshift({
        value: "0",
        name: "0.".green + " Cancel",
    });

    const deleteQuestion = [
        {
            type: "list",
            name: "id",
            message: "Delete",
            choices
        },
    ];

    const { id } = await inquirer.prompt(deleteQuestion);
    return id;
};

const confirm = async ( message ) => {
    const confirmQuestion = [
        {
            type: "confirm",
            name: "ok",
            message
        },
    ];

    const { ok } = await inquirer.prompt(confirmQuestion);
    return ok;
};

const showCheckList = async ( tasks = [] ) => {
    const choices = tasks.map( ( task, i ) => {
        const idx = `${i + 1}.`.green;

        return {
            value: task.id,
            name: `${ idx } ${ task.desc }`,
            checked: task.completedAt ? true : false,
        };
    });

    const checkListQuestion = [
        {
            type: "checkbox",
            name: "ids",
            message: "Select",
            choices
        },
    ];

    const { ids } = await inquirer.prompt(checkListQuestion);
    return ids;
};

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    deleteTaskList,
    confirm,
    showCheckList,
};