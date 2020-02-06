import { qs, qsa, writeToLS, readFromLS, bindTouch } from "./utl.js";
let toDoList = [];

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