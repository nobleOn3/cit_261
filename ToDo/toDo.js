import { qs, qsa, writeToLS, readFromLS, bindTouch } from "./utl.js";
let toDoList = [];

function saveToDo(toDo){
    console.log('saved', toDo);
    writeToLS('toDos', toDoList);
}

export default class Todo {
    constructor(){
        bindTouch('#newTodoButton', this.addNewToDo.bind(this));
    }

    listToDos(){
        
    }

    addNewToDo(){
        //save to datastore
        const todoText = qs('#newTodo'); //expects a CSS like id
        //list Todos
        saveToDo(todoText.value);
        //lists ToDos
        this.listToDos();
    }

    removeToDo(id){

    }

    completeToDo(id){

    }

}