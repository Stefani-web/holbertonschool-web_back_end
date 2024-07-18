<p align="center">
<img src="https://miro.medium.com/v2/resize:fit:840/1*8nfBRAssY0DuETYwdwyqqw.png"  alt="ES6_&_Js"/> </p>

<p align="center">
<img src="https://stevenmiles001.wordpress.com/wp-content/uploads/2020/01/basics.jpg?w=702&h=266"  alt="ES6 Basic"/> </p>

# ES6 Basics

## Introduction
ES6, also known as ECMAScript 2015, is the sixth edition of the JavaScript programming language. It introduces many new features that make it easier to write cleaner and more efficient code.

## Variables and Constants
ES6 introduces two new ways to declare variables: `let` and `const`. Unlike `var`, variables declared with `let` and `const` are limited to block scope.

```javascript
let variableLet = 'I am a let variable';
const variableConst = 'I am a constant';
```

## Arrow Functions
## Arrow functions provide a more concise syntax for writing anonymous functions.

```javascript
const addition = (a, b) => a + b;
```

## Default Parameters
ES6 allows you to define default values ​​for function parameters.

```javascript
function greet(name = 'Guest') {
return `Hello, ${name}!`;
}
```

## Decomposition Operator
The decomposition operator (...) is used to decompose arrays or objects.

```javascript
const numbers = [1, 2, 3];
const [one, two, three] = numbers;
```

## Template Literals
Template literals allow you to embed expressions in strings.

```javascript
const name = 'John';
const message = `Hello, ${name}!`;
```

## Destructuring
Destructuring allows you to extract values ​​from arrays or properties of objects.

```javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
```

## Modules
ES6 introduces a native syntax for JavaScript modules.

```javascript
// module.js
export const name = 'John';

// main.js
import { name } from './module.js';
```

## Classes
ES6 introduces a syntax for classes, making object creation and inheritance easier.

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
```

## Promises
Promises are used to handle asynchronous operations.

```javascript
const promise = new Promise((resolve, reject) => {
// asynchronous operation
if (/* success */) {
resolve('Success');
} else {
reject('Error');
}
});
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
