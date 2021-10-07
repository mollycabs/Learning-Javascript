// Create an object (a Person object like the one we created in lab is fine)
// Give the object class attributes (aka instance variables)
// Give the object functions
// Create an object that inherits from the first object (e.g., Student) with some attributes and functions of its own
// Test how to instantiate both types of objects, call their functions, and modify their variables.

class Person {
    constructor(name, DOB) {
        this.name = name;
        this.DOB = DOB;
    }
    setName(name){
        this.name = name;
    }

    getName(){
        return(this.name);
    }
    setDOB(DOB){
        this.DOB = DOB;
    }
    getDOB(){
        return(this.DOB);
    }
    greet(){
        return("Hello, " + this.name + "!");
    }
  }

let person1 = new Person("Molly", "2001-05-04");
console.log(person1);
console.log(person1.greet());
let person2 = new Person("Cam", "2000-09-13");
person2.setName("Josh Cayer");
console.log(person2.getName());
person2.setDOB("1999-10-31");
console.log(person2.getDOB());

class Student extends Person{
    constructor (name, DOB, major, YOG){
        super(name, DOB);
        this.major = major;
        this.YOG = YOG;
    }
    setMajor(major){
        this.major = major;
    }
    getMajor(){
        return(this.major);
    }
    setYOG(YOG){
        this.YOG = YOG;
    }
    getYOG(){
        return(this.YOG);
    }
}
let student1 = new Student("Kelsey", "06-17-2001", "Biology", 2024);
student1.setName("Ariana Grande");
console.log(student1.getName());
student1.setDOB("1998-03-16");
console.log(student1.getDOB());
student1.setMajor("Music Education");
console.log(student1.getMajor());
student1.setYOG(2024);
console.log(student1.getYOG());