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
