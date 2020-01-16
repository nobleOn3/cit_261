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
        if((i % 3) == 0)
            console.log("Fizz");
        else if ((i % 5) == 0 && (i % 3) != 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}