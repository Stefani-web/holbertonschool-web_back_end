<p align="center">
<img src="https://miro.medium.com/v2/resize:fit:1400/1*iE6rRpFFrNDTaIf6Cyexpg.jpeg"  alt="ES6_Classes"/> </p>

## Introduction
Classes in ES6 (ECMAScript 2015) introduce a simpler and clearer syntax for creating objects and handling inheritance in JavaScript. They make it easier to create object models and make code more readable and maintainable.

## Class Declaration
In ES6, classes are declared using the `class` keyword.

```javascript
class Person {
// Constructor is a special method to create and initialize an object created with a class.
constructor(name, age) {
this.name = name;
this.age = age;
}
}

```
## Constructors
The constructor is a special method used to initialize objects created with a class. It is called automatically when a new instance of the class is created.

```javascript
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}
}

const john = new Person('John', 30);
console.log(john.name); // John
console.log(john.age); // 30
```

## Methods
Methods are functions defined inside a class. They can be called on instances of the class.

```javascript
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

greet() {
return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}
}

const john = new Person('John', 30);
console.log(john.greet()); // Hello, my name is John and I am 30 years old.
```

## Inheritance
Inheritance allows you to create a new class based on an existing class. The new class inherits the properties and methods of the parent class.

```javascript
class Employee extends Person {
constructor(name, age, position) {
super(name, age); // Call the constructor of the parent class
this.position = position;
}

work() {
return `${this.name} works as ${this.position}.`;
}
}

const jane = new Employee('Jane', 28, 'developer');
console.log(jane.greet()); // Hello, my name is Jane and I am 28 years old.
console.log(jane.work()); // Jane works as a developer.
```

## Static methods
Static methods are defined on the class itself and not on instances of the class. They are called directly on the class.

```javascript
class MathUtil {
static add(a, b) {
return a + b;
}
}

console.log(MathUtil.add(5, 3)); // 8
```

## Technologies Used

- **ES6**: A modern version of JavaScript with advanced features.
- **Node.js**: Server-side JavaScript runtime environment.
- **Jest**: Testing framework for JavaScript.
- **Babel**: JavaScript transpiler to use ES6 features in older environments.

## Features

- **Variables and Constants**: Using `let` and `const` for variable declarations.
- **Arrow Functions**: Concise syntax for anonymous functions.
- **Classes**: Definition and use of classes in JavaScript.
- **Modules**: Import and export modules.
- **Promises**: Management of asynchronous operations with promises.
