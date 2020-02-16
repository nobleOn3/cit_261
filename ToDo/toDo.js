/*
    ToDo: Add a method to remove the input for the todo content after a todo
    is added to the display.
*/
import { qs, qsa, writeToLS, readFromLS, bindTouch } from "./utl.js";
let toDoList = [];
let completeList = [];
let activeList = [];

function completeToDo(id){
    console.log("Completed!");
    let tmp = getToDoByName(id);
    tmp.completed = !tmp.completed;
    console.log(tmp);


}

function getAllToDos() {
    return toDoList;
  }

function getToDoByName(content) {
    return getAllToDos().find(toDo => toDo.content === content);
  }

function removeToDo(id){
    console.log("Removed!");
    let tmp = getToDoByName(id);
    for(let i = 0; i < toDoList.length; i++){
        if(toDoList[i].content === tmp.content){
            toDoList.splice(i, 1);
        }
    }
    document.getElementById('#display').innerHTML = "";
    toDoList.forEach(display); 
    displayFilter();

}

// display
// a callback function to run through the list of toDo's and display them.
function display(item, index){

    let disp = document.createElement('div');
    disp.id = "tmp";
    disp.className = item.content;
    let buttn1 = document.createElement('input');
    let para = document.createElement('span');
    let buttn2 = document.createElement('button');

    buttn1.type = 'checkbox';
    buttn1.id = '#dispComplete';
    buttn1.className = 'dispComplete'

    buttn2.innerHTML = "X";

    para.innerHTML = item.content;
    para.id = "dispContent";
    buttn2.id = "dispRemove";

    disp.appendChild(buttn1);
    disp.appendChild(para);
    disp.appendChild(buttn2);

    buttn1.addEventListener('touchend', (e) => {
        completeToDo(item.content);
    });

    buttn2.addEventListener('touchend', (e) => {
        removeToDo(item.content);
    });
    document.getElementById('#display').appendChild(disp);
    
}
// displayFilter:
// creates the last item for the display, the filtering options
function displayFilter(){
    let disp = document.createElement('div');
    disp.id = "filter";
    let buttn1 = document.createElement('button');
    let buttn2 = document.createElement('button');
    let buttn3 = document.createElement('button');
    buttn1.innerHTML = "All"
    buttn2.innerHTML = "Complete";
    buttn3.innerHTML = "Active";
    buttn1.id = "all";
    buttn2.id = "complete";
    buttn3.id = "active";
    disp.appendChild(buttn1);
    disp.appendChild(buttn2);
    disp.appendChild(buttn3);
    document.getElementById('#display').appendChild(disp);
}

//saveToDo
// creates the toDo object and saves it to local storage.
function saveToDo(toDoText, toDoTime){
    const toDo = {
        timeStamp: toDoTime,
        content: toDoText,
        completed: false
    }

    toDoList.push(toDo);

    console.log('saved', toDoList);
    writeToLS('toDos', toDoList);
}

/**************************************************
 * Todo class
 *************************************************/
export default class Todo {
    constructor(){
        bindTouch('#newTodoButton', this.addNewToDo.bind(this));
    }

    listToDos(){
        document.getElementById('#display').innerHTML = "";
        toDoList.forEach(display); 
        displayFilter();      
    }

    addNewToDo(){
        const toDoText = qs('#content').value; //expects a CSS like id
        let date = new Date();
        const toDoTime = date.getTime();

        //list Todos
        saveToDo(toDoText, toDoTime);
        //lists ToDos
        this.listToDos();
    }
}