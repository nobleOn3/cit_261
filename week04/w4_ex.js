let pcList = []
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

function logPC() {
    tmpPC = new PC(document.getElementById('clss').value, document.getElementById('hp').value, document.getElementById('nm').value);
    tmpPC.display();
}

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

    console.log(pcList);
}

function displayPCs() {
    t = document.createElement('table');
    r= t.insertRow(0);
    c = r.insertCell(0);
    c.innerHTML = "Class";
    c = r.insertCell(1);
    c.innerHTML = "Hp";
    c = r.insertCell(2);
    c.innerHTML = "Name";
    for(let i = 0; i < pcList.length; i++){ 
        r = t.insertRow(i);
        c = r.insertCell(0);
        c.innerHTML = pcList[i].clss;
        c = r.insertCell(1);
        c.innerHTML = pcList[i].hp;
        c = r.insertCell(2);
        c.innerHTML = pcList[i].nm;
    }
    document.getElementById("addTable").appendChild(t);
}
















const input = document.forms[0].elements.sInput;
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('Value has changed'), false);

const form = document.forms['search'];
form.addEventListener('submit', subSearch, false);

function subSearch() {
    alert('Form Submitted');
}