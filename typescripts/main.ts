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
    }
}

/*Test code start here*/
let myItem = new ToDoItem("Finish homework");

myItem.isCompleted = false;
myItem.deadline = new Date(2019, 9, 29); // month starts at 0, so 9 is october instead of 10.


//Stringify converts any object, into a json string format.
let strData = JSON.stringify(myItem);
console.log(strData);

//setting a cookie called todoitems that expires in a week
Cookies.set("todoitems", strData, {expires:7});

/*Test code end here*/

window.onload = function() {
    let addButton = <HTMLElement>document.querySelector("form > input[type=button]");
    addButton.onclick = main;
};

function main() {
    let item:ToDoItem = getItem();

    displayToDoItem(item);
}

/**
 * Displays to-do item on the page.
 * @param item Item to be displayed.
 */
function displayToDoItem(item:ToDoItem):void {
    let div = document.createElement("div");
    div.onclick = markAsComplete;

    div.innerHTML = '<input type="checkbox">' + item.title;

    let displayDiv = document.getElementById("todo");

    displayDiv.appendChild(div);
}

/**
 * Move selected task to completed section of the page.
 */
function markAsComplete() {
    let currItem = <HTMLDivElement>this;

    let completedItems = document.getElementById("completed");

    completedItems.appendChild(currItem);
}

/**
 * Grabs the to-do item from the form.
 */
function getItem():ToDoItem {
    let titleElem = <HTMLInputElement>document.getElementById("title");
    let item = new ToDoItem(titleElem.value);

    let deadlineElem = <HTMLInputElement>document.getElementById("deadline");
    item.deadline = new Date(deadlineElem.value);

    item.isCompleted = false;

    return item;

}

//