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

/**************************************************************************
 * Simple function to test if a number is odd.
**************************************************************************/
function isOdd(num){
    return num % 2 === 1;
}

/**************************************************************************
 * This function builds a chessboard and logs it to the console.
**************************************************************************/
function create_chessboard(){
    let str = ""
    for(i = 0; i < 8; i++){
        if(isOdd(i+1))
            str+=" # # # #\n"
        else 
            str+="# # # # \n"
    }
    console.log(str);
}

/**************************************************************************
 * This function returns the smallest of two numbers.
**************************************************************************/
function min(x, y){
    if(x < y){
        console.log(x);
        return x;
    }
    else{
        console.log(y);
        return y;
    }
  }

/**************************************************************************
 * This function returns whether a number is odd or even.
**************************************************************************/
function isEven(x){
    if(x == 0)
        return true;
    else if(x == 1)
        return false;
    else
        return isEven(x - 2);
}

/**************************************************************************
 * This function prints whether a number is odd or even.
**************************************************************************/
function evenOrOdd(x){
    if(isEven(x) == true)
        console.log("The number is even!");
    else
        console.log("The number is odd!");
}

/**************************************************************************
 * This function returns an array from the first parameter to the second.
 * Does not work, strange bug that causes my computer to work extremely 
 * hard. Not sure what the problem is. start always comes up undefined.
**************************************************************************/
// function range(start = 1, end = 1, step = 1){
//     let arr = [];
//     for(let i = start; i < end; i+=step) {
//         arr.push(i);
//     }
//     console.log(arr);
//     return arr;
// }

/**************************************************************************
 * This function returns an array from the first parameter to the second.
 * Working version of range.
**************************************************************************/
function range2(start, end){
    let arr = [];
    start++;
    start--;
    for(let i = start; i <= end; i++) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
}