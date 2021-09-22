// a one-condition if/else statement (i.e. "if x == true")
// a multi-condition if/else statement (i.e. "if x>0 && y< 10)
// if/elif/else statements
// short-circuit logic
// a switch-case statement

var x = true;
if (x == true){
    console.log("Yay!");
} else{
    console.log("Boo!");
}

var y = 40;
if (y>10 && y<50) {
    console.log("Cool Number");
} else {
    console.log("Oh.");
}

var b = 30;
if (b<20) {
    console.log("Small!");
} else if (b<30) {
    console.log("Medium");
} else {
    console.log("Large!");
}

var z = 40;
if (z>10 && z>50) {
    console.log("Cool Number");
} else {
    console.log("Oh."); //this will print since both conditions need to be true using &&
}

if (z>10 || z>50) {
    console.log("Cool Number"); //the program short circuits because || means OR so if the first condition is true, the other conditions aren't even checked
} else {
    console.log("Oh.");
}

var t = 3
switch (t) {
    case 1:
        console.log("1!");
        break;
    case 2:
        console.log("2!");
        break;
    case 3:
        console.log("3!"); //t=3 so this line will return
        break;
}