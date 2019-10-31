/**
 * Represents a single task on a to-do list.
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(title) {
        if (title == null) {
            throw "You must give a non-null value";
        }
        this.title = title;
    }
    return ToDoItem;
}());
{
    /*Test code start here*/
    var myItem = new ToDoItem("Finish homework");
    myItem.isCompleted = false;
    myItem.deadline = new Date(2019, 9, 29); // month starts at 0, so 9 is october instead of 10.
    //Stringify converts any object, into a json string format.
    var strData = JSON.stringify(myItem);
    console.log(strData);
    //                 Cookie Storage                   //
    //setting a cookie called todoitems that expires in a week
    var cookieKey = "todoitems";
    Cookies.set(cookieKey, strData, { expires: 7 });
    var cookieItem = JSON.parse(Cookies.get(cookieKey));
    console.log("Read cookie data: " + cookieItem.title + " " + cookieItem.deadline);
    //                 HTML Storage                   //
    var storageKey = "Task";
    if (typeof (Storage) != "undefined") {
        localStorage.setItem(storageKey, strData);
        var storageStr = localStorage.getItem(storageKey);
        var item = JSON.parse(storageStr);
        console.log(localStorage.Task);
    }
    /*Test code end here*/
}
window.onload = function () {
    var addButton = document.querySelector("form > input[type=button]");
    addButton.onclick = main;
};
function main() {
    var item = getItem();
    displayToDoItem(item);
    // Get exsisting todos, add new one, re-save list
    var allItems = readToDoItems();
    allItems.push(item); // Add new item to exsisting list
    saveToDoItems(allItems);
    for (var currIndex = 0; currIndex < allItems.length; currIndex++) {
        alert(allItems[currIndex].title);
    }
}
/**
 * Displays to-do item on the page.
 * @param item Item to be displayed.
 */
function displayToDoItem(item) {
    var div = document.createElement("div");
    div.onclick = markAsComplete;
    div.innerHTML = '<input type="checkbox">' + item.title;
    var displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}
/**
 * Move selected task to completed section of the page.
 */
function markAsComplete() {
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}
/**
 * Grabs the to-do item from the form.
 */
function getItem() {
    var titleElem = document.getElementById("title");
    var item = new ToDoItem(titleElem.value);
    var deadlineElem = document.getElementById("deadline");
    item.deadline = new Date(deadlineElem.value);
    item.isCompleted = false;
    return item;
}
var theStorageKey = "MyItems";
function saveToDoItems(items) {
    localStorage.setItem(theStorageKey, JSON.stringify(items));
}
function readToDoItems() {
    var stringData = localStorage.getItem(theStorageKey);
    if (stringData == null) {
        return new Array();
    }
    return JSON.parse(stringData);
}
