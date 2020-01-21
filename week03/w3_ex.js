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
