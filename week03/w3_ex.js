/*
1.  This week I did several more exercises from the readings. 
On top of that I also did the team activity by myself, 
which required a bit of extra research and study on my part.
2. Next week my goal is to continue to work on exercises. I feel like I am learning a 
lot from them. Unfortunately I did not get to spend as much time on things 
this week, as I did last week, so my goal for next week is to spend at least an 
hour more doing exercises. I also still need to fix the bug that I found in my code from 
last week.
3.  My main blocker is still the bug I found last week. I'm hoping that spending more 
time next week studying for this class will allow me to have more time 
to figure out what is going wrong.
*/
let user = {
    name: "Jessen",
    age: 26,

    sayHello() {
        alert("Hello " + this.name);
    }
};
/***********************************************************
 * This function alerts the user with a hello message,
 * using a class method.
 **********************************************************/
function sayHi(){
    user.sayHello();
}

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  const GAMES = [
      {name: "Pathfinder: Kingseeker", Price: 15.00, approxPlaytime: "4 hours"},
      {name: "Doom 2015", Price: 5.99, approxPlaytime: "2 hours"},
      {name: "Monster Hunter: World", Price: 20.00, approxPlaytime: "78 hours"},
      {name: "Rocket League", Price: 20.00, approxPlaytime: "80 hours"},
      {name: "CupHead", Price: 15.99, approxPlaytime: "23 hours"}
  ];

/***********************************************************
 * This function builds a table and returns it. This code
 * was pulled from the answer the website gave, since I 
 * didn't understand things well enough after 30 mins to 
 * build it on my own.
 **********************************************************/
  function buildTable(data) {
    let table = document.createElement("table");
  
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
      let headCell = document.createElement("th");
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
      let row = document.createElement("tr");
      fields.forEach(function(field) {
        let cell = document.createElement("td");
        cell.appendChild(document.createTextNode(object[field]));
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

/***********************************************************
 * This function displays a table built off of the 
 * MOUNTAINS object array.
 **********************************************************/
  function buildMntns() {
    document.querySelector("#mntns").appendChild(buildTable(MOUNTAINS));
  }

  /***********************************************************
 * This function displays a table built off of the GAMES
 * object array.
 **********************************************************/
  function buildGames() {
    document.querySelector("#gms").appendChild(buildTable(GAMES));
  }

  function showValues() {
      let tables = Array.from(document.querySelectorAll("table"));
      tables.forEach(myFunc)
  
  }

  function myFunc(item, index) {
    console.log(item.Array);
    //i = Array.from(item);
    //i.forEach((item, index) => console.log(item + " " + index));
  }
