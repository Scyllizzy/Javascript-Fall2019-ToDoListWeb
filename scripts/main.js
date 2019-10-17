/**
 * Represents a single task on a to-do list.
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(title) {
        if (title == null) {
            throw "You must give a non-null value";
        }
        this.title = title;
        this.isCompleted = false;
    }
    return ToDoItem;
}());
var myItem = new ToDoItem("Finish homework");
