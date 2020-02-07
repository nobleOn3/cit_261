import { qs, qsa, writeToLS, readFromLS, bindTouch } from "./utl.js";
let toDoList = [];

function display(item, index){
    let disp = document.createElement('div');
    disp.id = "tmp";
    let buttn1 = document.createElement('input');
    let para = document.createElement('span');
    let buttn2 = document.createElement('button');
    buttn1.type = 'radio';
    buttn1.id = 'dispComplete';
    buttn2.innerHTML = "X";
    para.innerHTML = item.content;
    para.id = "dispContent";
    buttn2.id = "dispRemove";
    disp.appendChild(buttn1);
    disp.appendChild(para);
    disp.appendChild(buttn2);
    document.getElementById('#display').appendChild(disp);

}

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

export default class Todo {
    constructor(){
        bindTouch('#newTodoButton', this.addNewToDo.bind(this));
    }

    listToDos(){
        document.getElementById('#display').innerHTML = "";
        toDoList.forEach(display);       
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

    removeToDo(id){

    }

    completeToDo(id){

    }

}