//Write a JavaScript code snippet demonstrating the use of each type of variable declaration (`var`, `let`, and `const`) showing their differences and explaining the output
// 1. var declaration:

var firstName = "John";


console.log(firstName); // Output: undefined (variable is declared but not assigned a value yet)

firstName = "Jane";
console.log(firstName); // Output: Jane (variable has been reassigned)

// 2. let declaration:

let lastName = "Emeka";

// console.log(lastName); 

lastName = "Smith";
console.log(lastName); // Output: Smith (variable has been reassigned)

// 3. const declaration:

const age = 30;

// Reassignment (throws an error):
// age = 31; // TypeError: Assignment to constant variable.

console.log(age); // Output: 30





//2. Write JavaScript code snippets for the following operators and ensure the results are logged on the console; 
//Arithmetic Operators 
//Comparison Operators 
//Logical Operators 
//Assignment Operators
//Increment/Decrement Operators 


// **Arithmetic Operators:**

let num1 = 10;
let num2 = 5;

console.log( num1 + num2); // Output: 15
console.log( num1 - num2); // Output: 5
console.log( num1 * num2); // Output: 50
console.log( num1 / num2); // Output: 2
console.log( num1 % num2); // Output: 0
console.log( num1 ** num2); // Output: 100,000 (10 raised to the power of 5)

// **Comparison Operators:**

console.log( num1 === num2); // Output: false (strict equality)
console.log( num1 !== num2); // Output: true (strict not equal)
console.log( num1 > num2); // Output: true
console.log( num1 < num2); // Output: false
console.log( num1 >= num2); // Output: true
console.log(num1 <= num2); // Output: false

// **Logical Operators:**

let bool1 = true;
let bool2 = false;

console.log( bool1 && bool2); // Output: false (both must be true)
console.log( bool1 || bool2); // Output: true (at least one must be true)
console.log(!bool1); // Output: false (negates bool1)

// **Assignment Operators:**

let x = 3;

console.log( x += 2); // Output: 5 (assigns and adds 2)
console.log(x -= 1); // Output: 4 (assigns and subtracts 1)
console.log( x *= 3); // Output: 12 (assigns and multiplies by 3)
console.log(x /= 2); // Output: 6 (assigns and divides by 2)
console.log(x %= 4); // Output: 2 (assigns and takes remainder after dividing by 4)

// **Increment/Decrement Operators:**

let y = 1;

console.log("Post-increment:", y++); // Output: 1 (prints original value, then increments)
console.log( y); // Output: 2
console.log(--y); // Output: 1 (decrements, then prints the value)


