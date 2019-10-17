/**
 * Represents a single task on a to-do list.
 */
class ToDoItem {
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(title:string) {
        if(title == null) {
            throw "You must give a non-null value";
        }

        this.title = title;
        this.isCompleted = false;
    }
}

let myItem = new ToDoItem("Finish homework");