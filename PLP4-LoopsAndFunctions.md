# Javascript Loops and Functions

## Loops:

**Javascript has many different options as far as loops go. Loops are extremely useful for repeating code without having to write it out multiple times.**  
- The for loop goes through a chunk of code a certain number of times. 
- The for/in loop loops through the properties of an object. The for/of loop goes through the values of an iterable object. 
- The while loop repeats a chunk of code while a condition is still true (or conditions). 
- The do/while loop ensures that a loop runs at least once because the conditions are checked after going through once. 

## Functions:

Functions in Javascript are defined using the following syntax:

Function functionName(parameter 1, parameter 2, etc) {
	
	//Code to be executed
	
}

Functions must be called in order to run, but there are no specific rules about where they must be in your code in order to run. 
**Recursive** functions are functions that call themselves until a certain condition is met. Javascript **does** allow for these types of functions. 
Javascript allows for multiple parameters in any data type. Data types do not need to be specified in the definition of the function, either. 
Javascript doesn’t permit functions that return multiple values, however this can be emulated by storing multiple values in an array or an object and returning that.
In Javascript, arguments are pass-by value and objects are pass-by reference. This means that when arguments values are changed within the function, these changes **will not** be made to the original parameter. 
However when changes are made to an object property in a function, these changes **will** be reflected outside of the function because an object reference is a value.
