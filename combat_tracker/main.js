import Combatant from './combatant.js';
import Spell from './spell.js';

//Add event listeners
document.getElementById('add_combatant').addEventListener('touchend', () => {
    add_combatant(); 
    display_combatants();
});

document.getElementById('add_spell').addEventListener('touchend', () => {
    add_spell(); 
    display_spells();
});

//Lists of objects
let c_list = []; //list of combatants
let s_list = []; // list of spells

//Display functions
function display_combatants(){
    for(const element of c_list) {
        console.log(element.name, element.hp, element.initiative);
    }
}

function display_spells(){
    for(const element of s_list) {
        console.log(element.name);
    }
}

// Functions to add objects to the lists
function add_spell(){
    let name = document.getElementById('spell_name').value;
    let dura = document.getElementById('duration').value;

    let s = new Spell(name, dura);
    s_list.push(s);
}

function add_combatant(){
    let name = document.getElementById('name').value;
    let init = document.getElementById('initiative').value;
    let hp = document.getElementById('health_pool').value;

    let c = new Combatant(name, init, hp);
    c_list.push(c);
}














//import{qs, qsa} from './utl.js'; //Non-default import, remember that this is dumb, cant find with simple reference to filename.
//import Todo from './toDo.js';

//const myTodo = new Todo();
//document.addEventListener('load', myTodo.listToDos);