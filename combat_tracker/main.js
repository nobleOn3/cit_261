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

document.getElementById('next_round').addEventListener('touchend', () =>{
    next_round();
    display_spells();
})

document.getElementById('attack').addEventListener('touchend', () =>{
    attack(document.getElementById('value').value);
    display_combatants();
})

document.getElementById('heal').addEventListener('touchend', () =>{
    heal(document.getElementById('value').value);
    display_combatants();
})

//Lists of objects
let c_list = []; //list of combatants
let s_list = []; // list of spells

//Display functions
function display_combatants(){

    let c_display = document.getElementById("c_table");

    c_display.innerHTML = "";

    let newRow = document.createElement('tr');

    let newCell = document.createElement('td');
    newCell.innerHTML = "Name";
    newRow.appendChild(newCell);

    newCell = document.createElement('td');
    newCell.innerHTML = "Initiative";
    newRow.appendChild(newCell);

    newCell = document.createElement('td');
    newCell.innerHTML = "HP";
    newRow.appendChild(newCell);


    c_display.appendChild(newRow); 

    for(const element of c_list) {
        console.log(element.name, element.hp, element.initiative);

        newRow = document.createElement('tr');
        newCell = document.createElement('td');
        newCell.innerHTML = element.name;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.innerHTML = element.initiative;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.innerHTML = element.hp;
        newRow.appendChild(newCell);


        c_display.appendChild(newRow);       
    }
}

function display_spells(){
    let s_display = document.getElementById("s_table");

    s_display.innerHTML = "";

    let newRow = document.createElement('tr');

    let newCell = document.createElement('td');
    newCell.innerHTML = "Name";
    newRow.appendChild(newCell);

    newCell = document.createElement('td');
    newCell.innerHTML = "Duration";
    newRow.appendChild(newCell);


    s_display.appendChild(newRow); 

    for(const element of s_list) {
        console.log(element.name, element.duration);

        newRow = document.createElement('tr');
        newCell = document.createElement('td');
        newCell.innerHTML = element.name;
        newRow.appendChild(newCell);

        newCell = document.createElement('td');
        newCell.innerHTML = element.duration;
        newRow.appendChild(newCell);

        s_display.appendChild(newRow);       
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
    c_list.sort(compare_cmbt);
}

function compare_cmbt(a,b){
    if(b.initiative < a.initiative)
        return -1;
    else if(b.intiative > a.intiative)
        return 1;
    else
        return 0;
}

function next_round() {
    for(const element of s_list){
        console.log(element);
        element.reduce_duration(1);
        if(element.duration === 0){
            let removeIndex = s_list.map(function(element){return element;});
            s_list.splice(removeIndex, 1);
        }
    }
}

function attack(damage){
    let combatant = c_list.find(checkCombatant);

    combatant.getHit(damage);

    if(combatant.hp === 0){
        let removeIndex = c_list.map(function(combatant){return combatant;});
        c_list.splice(removeIndex, 1);
    }
}

function checkCombatant(combatant){
    return combatant.name == document.getElementById('victim').value;
}

function heal(healing){
    let combatant = c_list.find(checkCombatant);

    combatant.getHealed(parseInt(healing));
}















//import{qs, qsa} from './utl.js'; //Non-default import, remember that this is dumb, cant find with simple reference to filename.
//import Todo from './toDo.js';

//const myTodo = new Todo();
//document.addEventListener('load', myTodo.listToDos);