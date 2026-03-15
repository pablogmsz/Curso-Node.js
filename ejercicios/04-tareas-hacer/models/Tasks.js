require("colors");

const Task = require("./task");

class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    };

    get taskList() {
        const list = [];
        
        /**
         * El objeto "Objects", es un objeto propio de JavaScript que
         * proporciona funcionalidades comunes a los objetos que hayas
         * creado. En este caso usamos el método "keys" para devolver las
         * propiedades y métodos de nuestro objeto.
         */
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push( task );
        });

        return list;
    }

    createTask( desc = "" ) {
        const task = new Task(desc);

        /**
         * Cogemos la propiedad "id" del objeto "task" y se la añadimos
         * a nuestro objeto lista 
         */
        this._list[task.id] = task;
    };

    // TAREA DEL VÍDEO.
    loadTasksFromArray( tasks = [] ) {
        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    };

    // TAREA DEL VÍDEO.
    completeList() {
        let count = 1;
        const list = this.taskList;

        console.log();

        list.forEach( task => {
            const { desc, completedAt } = task;
            const status = completedAt ? "Completed".green : "Pending".red;

            console.log(`${ (count + ".").green } ${ desc } :: ${ status }`);

            count += 1;
        });
    };

    // TAREA DEL VÍDEO.
    completedPendingList( completed = true ) {
        let count = 1;
        const list = this.taskList;

        console.log();

        list.forEach( task => {
            const { desc, completedAt } = task;
            const status = completedAt ? "Completed".green : "Pending".red;

            if ( completed ) {
                if ( status === "Completed".green ) console.log(`${ (count + ".").green } ${ desc } :: ${ completedAt.green }`);
                
            } else {
                if ( status === "Pending".red ) console.log(`${ (count + ".").green } ${ desc } :: ${ status }`);
            };

            count += 1;
        });
    };

    deleteTask( id = "" ) {
        if ( this._list[id] ) delete this._list[id];
    };

    completeToggle( ids = [] ) {
        ids.forEach( id => {
            const task = this._list[id];

            if ( !task.completedAt ) {
                task.completedAt = new Date().toISOString();
            };
        });

        this.taskList.forEach( task => {
            if ( !ids.includes(task.id) ) {
                this._list[task.id].completedAt = null;
            };

        });
    };
};

module.exports = Tasks;