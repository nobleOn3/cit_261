import{qs, qsa} from './utl.js'; //Non-default import, remember that this is dumb, cant find with simple reference to filename.
import Todo from './toDo.js';

const myTodo = new Todo();
document.addEventListener('load', myTodo.listToDos);
