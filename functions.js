// Write a function that takes in two numbers, multiplies them, and returns the output
// Write a recursive function (one that calculates a factorial is fine)
// Write a function that takes in a string (or your language's equivalent) and 
// splits it into two strings, then returns both strings
// Call your functions and save the results of the function calls in variables.
// Write a function that tests whether your language is pass-by-reference or pass-by-value.

//takes in two numbers and multiplies them and returns the output
function jsFunction(x,y){
    return x*y
}
newNumber = jsFunction(3,6);

//recursive function that counts down from a number to zero. 
function countDown(num){
    console.log(num);
    var newNum = num-1;
    if (newNum > 0){
        countDown(newNum);
    }
}
countDown(5);

//take in a string and split it into two strings and return them
function stringSplice(string){
    var array = string.split(" ",2);
    return (array);
}
twoStrings = stringSplice("Hey girl");

//pass by value or pass by reference?
function passByValue(num){
    num = num + 3; //value changed in function but is not returned... does the variable value change?
}
num = 5;
passByValue(num);
console.log(num); //the value does not change. this indicates pass by value behavior

//pass by reference- arrays and objects

var kardashians = ["Kim", "Khloe", "Kourtney"];

function passByReference (x){
    kardashians.push("Kris"); //add another element to an array with no return statement. will array change outside of function?
}

passByReference(kardashians);
console.log(kardashians); //the array does change, despite there being no return statement.
                            // this indicates pass by reference behavior

