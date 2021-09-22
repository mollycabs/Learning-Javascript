What Does Javascript Support?

Javascript uses true and false for boolean values. ALL lowercase letters must be used (not True or False). 
For conditional statements, Javascript uses if, else if, and else. There are no other variations of these available in the language. 

Short-Circuit Evaluation in Javascript

Javascript supports short-circuit evaluation when using || but not when using &&. This makes the language very versatile.
When || is used in a conditional statement, this requires that only one condition be true. So if the first condition is met, the second condition would never be checked.
When && is used, both conditions must be met. So, this method does not allow for short-circuit evaluation. Having both of these options gives the programmer more control. 

The "Dangling Else" Problem

Javascript requires that all conditions be enclosed in parentheses () and that the chunk of code executed with that condition be enclosed in curly braces {}.
Because of this, it is clear which if statement the else is correlated with.

Switch Statements in Javascript

Javascript does support switch statements and break must be used to exit the case statement. Otherwise, the next case would be executed even if the case is not a match. 
However, break does not need to be used in the last case of a switch statement. Javascript supports the default keyword, which is similar to the else keyword in that it indicates the code to be run if there is no case match. 

Sources:
https://www.javascript.com/learn/conditionals 
https://www.w3schools.com/js/js_if_else.asp
https://www.w3schools.com/js/js_comparisons.asp
https://www.w3schools.com/js/js_booleans.asp
https://www.w3schools.com/js/js_switch.asp

