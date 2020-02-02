//List of PC's
let pcList = []
/*************************************************
 *This class represents a player character from
 *DnD.
**************************************************/
class PC {
    //TODO:Solve the problem with the default values working with passing in the document selectors?
    constructor(clss="Barbarian", hp=10, nm="Name the Unknown") {
        this.nm = nm;
        this.clss = clss;
        this.hp = hp;
    }

    washit(ht=0) {
        this.hp -= ht;
    }

    display() {
        console.log(this.nm);
        console.log(this.hp);
        console.log(this.clss);
    }
}

/*************************************************
 *This function logs a pc to the console.
**************************************************/
function logPC() {
    tmpPC = new PC(document.getElementById('clss').value, document.getElementById('hp').value, document.getElementById('nm').value);
    tmpPC.display();
}

/*************************************************
 *This function adds a PC to the list, in order
 *based on class.
**************************************************/
function addPC() {
    tmpPC = new PC(document.getElementById('clss').value, document.getElementById('hp').value, document.getElementById('nm').value);
    pcList.push(tmpPC);

    //Sort based on class
    pcList.sort((a,b) => {
        if(a.clss < b.clss){  
     
            return -1;
        }
        else if (a.clss > b.clss){
            return 1;
        }
        else{
            return 0;
        }
    });

}

/*************************************************
 *This function finds the PC that should be 
 *attacked.
**************************************************/
function findPC(){
    for(let i = 0; i < pcList.length; i++){
        if(pcList[i].nm == document.getElementById('hit').value) {
            return pcList[i];
        }
    }
}

/*************************************************
 *Function that enables a PC to be damaged.
**************************************************/
function attack() {
    dmg = document.getElementById('dmg').value;
    hit = findPC();
    hit.washit(dmg);

    p=document.createElement('p');
    p.innerHTML = (hit.nm + " took " + dmg + "damage!");
    document.getElementById('addP').appendChild(p);
    
    p2=document.createElement('p');
    p2.innerHTML = ("They now have " + hit.hp + " hitpoints!");
    document.getElementById('addP').appendChild(p2);
}

/*************************************************
 *This function creates a table to display pcList
**************************************************/
function displayPCs() {
    t = document.createElement('table');
    r= t.insertRow(0);
    c = r.insertCell(0);
    c.innerHTML = "Class";
    c = r.insertCell(1);
    c.innerHTML = "Hp";
    c = r.insertCell(2);
    c.innerHTML = "Name";
    for(let i = 0, w = 1; i < pcList.length; i++, w++){ 
        r = t.insertRow(w);
        c = r.insertCell(0);
        c.innerHTML = pcList[i].clss;
        c = r.insertCell(1);
        c.innerHTML = pcList[i].hp;
        c = r.insertCell(2);
        c.innerHTML = pcList[i].nm;
    }

    d = document.getElementById("addTable");
    if(d.childNodes[0] != undefined)
        d.removeChild(d.childNodes[0]);
    d.appendChild(t);
}








//Failed attempt at using .find from an array to find correct
//PC to take hp from.
// function checkName(com){
//     console.log(com.nm);
//     return com.nm == document.getElementById('hit');
// }

// function attack(){
//     dmg = document.getElementById('dmg').value;
//     hit = pcList.find(checkName);
//     hit.washit(dmg);
//     //p = document.createElement('p');
//     //p.innerHTML = (hit.nm + " took " + dmg + "damage!");
//     //document.getElementById('addP').appendChild(p);
// }







// const input = document.forms[0].elements.sInput;
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('Value has changed'), false);

// const form = document.forms['search'];
// form.addEventListener('submit', subSearch, false);

// function subSearch() {
//     alert('Form Submitted');
// }