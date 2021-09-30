//Write (or try to emulate, if your language doesn’t have them) different kinds of loops: while, do/while, for, foreach


////// for loop
for (var i = 0; i < 5; i++) {
    console.log("The number is: " + i); //for loop that prints a number and increments it until it is greater than 4
  }
/////// for in loop
const numbers = [1,5,6,80,44,30];
for (var x in numbers) {
    console.log(x); //a for in loop that iterates through the properties of an object or an array 
    //array was used here.
}
//////// for of loop
var greet = "Heyy";
for (var x of greet){
    console.log(x); //this will loop through the values of the string. can also be done with arrays and nodelists, etc
}

////// while loop
var i = 0;
while (i<5){
    console.log(i);
    i++; //this is a while loop that continues a loop while a certain condition remains true. 
}
/////// do while loop

var y = 0;
do {
    console.log(y);
    y++
}
while (y<2); //this variation of the while loop will always execute at least once 
            //since the condition is checked after the first loop.




