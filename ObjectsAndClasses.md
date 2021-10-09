# Javascript Classes and Objects

Javascript is a language that does support objects and classes. Javascript classes are defined using the following basic syntax:

```
class ClassName {
       constructor(attribute1, attribute2….){
this.attribute1 = attribute1
this.attribute2 = attribute2
       }
}
```


This is an example of a class declaration. Remember to always use the key word “class” to declare a class. Class declarations must have a constructor method but cannot have more than one constructor or else you will get an error. The constructor method is used to initialize properties of the class and subsequent objects. 

# Class Objects

Once the class is declared, you can start creating objects of that class!. To instantiate a class object, use the following general syntax: 

```
Let classObjectName = new ClassName(attribute1, attribute 2);
```

The constructor method is always executed when a new object is created. This happens automatically. 

# Overloading and Inheritance

Javascript doesn’t support method overloading by nature. If there are two methods with the same name, Javascript will just override the first method written. 

Javascript does support class inheritance, but does not support multiple inheritance. This is because Javascript supports prototypal inheritance rather than the usual classical inheritance. This means that Javascript inheritance occurs at runtime by searching the prototype chain of the object to find values. Objects only have one associated prototype, so it cannot inherit from multiple chains.
