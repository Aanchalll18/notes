1. What are the data types in JavaScript?

JavaScript has primitive types like string, number, boolean, null, undefined, bigint, and symbol, and non-primitive or reference types like object, array, and function.


2. Explain the difference between undefined and null?

undefined means a variable has been declared but not assigned a value. null is an intentional assignment that represents "no value".

3. How does JavaScript handle types?

JavaScript is dynamically typed, meaning variables can hold any type, and the type can change at runtime. It also uses type coercion, converting between types when necessary.

4. What are truthy and falsy values in JavaScript?

Truthy values evaluate to true in a boolean context (e.g., 'hello', 1, []). Falsy values include false, 0, '', null, undefined, and NaN.

5. What is the difference between == and ===?

== is the loose equality operator; it performs type coercion. === is strict equality; it checks both value and type.

6. Explain hoisting in JavaScript.

Hoisting is JavaScript’s default behavior of moving declarations to the top of the scope before code execution. var declarations and function declarations are hoisted.

7. What is strict mode in JavaScript and how is it enabled?
"use strict"; enables strict mode, which makes JavaScript throw errors for unsafe actions like assigning to undeclared variables, helping catch bugs early.

9. Explain the difference between var, let, and const.

var is function-scoped and hoisted.
let is block-scoped and not hoisted to the top of the block.
const is also block-scoped but creates a read-only reference to a value.

10. How do you define constants in JavaScript?
Constants are defined using const. Once assigned, the variable cannot be reassigned, though the contents (like in objects or arrays) can still be mutated.

11. What are the different ways to create functions in JavaScript?

Function Declaration
Function Expression
Arrow Function

12. Explain the difference between function declaration and function expression.
Function declarations are hoisted and can be used before they are defined. Function expressions are not hoisted and can only be used after their definition.

15. How do you pass arguments to a function in JavaScript?
Arguments are passed by value. For objects and arrays, the reference is passed, so changes affect the original.

17. What is a callback function? Provide an example of its usage.
A callback is a function passed as an argument to another function to be executed later.

21. How do you create objects in JavaScript?
You can create objects using:

Object literal: const obj = {};
Constructor function: const obj = new Object();
ES6 classes
Object.create(proto) to create with a specific prototype.

24. How do you add properties to an object in JavaScript?
You can add properties using:

Dot notation: obj.key = value;
Bracket notation: obj["key"] = value;

25. What are object methods? Provide an example.
Object methods are functions assigned as object properties.


  
