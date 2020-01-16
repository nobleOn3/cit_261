/***********************************************************
 * This function prints a right triangle, using hashtags, 
 * to the console. 
 **********************************************************/
function console_triangle() {
    let str = ""
    console.log("CLICK")
    for(i = 0; i < 7; i++)
        console.log(str +="#");
}

/********************************************************
 * This function prints the numbers 1 to 100, but those
 * that are divisible by 3 and 5 have special output.
 *******************************************************/
function fizz_buzz() {
    for(i = 1; i < 101; i++){
        if((i % 3) == 0 && (i % 5) != 0)
            console.log("Fizz");
        else if ((i % 5) == 0 && (i % 3) != 0)
            console.log("Buzz");
        else if ((i % 5) == 0 && (i % 3) == 0)
            console.log("FizzBuzz");
        else
            console.log(i);
    }
}

let cls = ["fighter", "barbarian", "wizard", "warlock", "cleric", "druid"];
let bbegs = ["Lich", "Beholder", "Red Dragon", "Pit Fiend", "Demon Prince"];
let weapons = ["Bow of Truth", "Axe of Souls", "Throatripper", "Wand of Fireballs"];
let races = ["Halfling", "Elf", "Half-Elf", "Half-Orc", "Dragonborn", "Tabaxi", "Human"]
/**************************************************************************
 * This function finds a random number at or below the number passed in.
**************************************************************************/
function random(num) {
    return Math.floor(Math.random() * num);
}

/**************************************************************************
 * This function builds off of the example from class. It builds a random
 * sentence that tells about a legendary hero striking down the big bad
 * evil guy.
**************************************************************************/
function dnd_sentence() {
    let cl = cls[random(6)];
    let bbeg = bbegs[random(5)];
    let weapon = weapons[random(4)];
    let race = races[random(7)];
    console.log("The " + race + " " + cl + " struck down the "+ bbeg + " using the legendary " + weapon + "!");
}