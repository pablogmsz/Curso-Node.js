require("colors");

const { inquirerMenu, pause, readInput, deleteTaskList, confirm, showCheckList } = require("./helpers/inquirer.js");
const { saveDB, readDB } = require("./helpers/saveFile.js");
const Tasks = require("./models/Tasks.js");

const main = async () => {
    let opt;
    const tasks = new Tasks();
    const tasksDB = readDB();

    if ( tasksDB ) {
        tasks.loadTasksFromArray( tasksDB );
    };

    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case 1:
                const desc = await readInput("Description: ");
                tasks.createTask( desc );
                break;

            case 2:
                tasks.completeList();
                break;

            case 3:
                tasks.completedPendingList();
                break;

            case 4:
                tasks.completedPendingList( false );
                break;

            case 5:
                const ids = await showCheckList( tasks.taskList );
                tasks.completeToggle( ids );
                break;

            case 6:
                const id = await deleteTaskList( tasks.taskList );
                if ( id !== "0" ) {
                    const confirmation = await confirm("Are you sure?");
                    
                    if ( confirmation ) {
                        tasks.deleteTask( id );
                        console.log("\nTask deleted successfully")
                    };
                };

                break;

            case 0:
                
                break;
            
            default:
                break;
        };

        saveDB( tasks.taskList );

        if ( opt !== 0 ) await pause();
        
    } while ( opt !== 0 );
};

main();