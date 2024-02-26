//2. Write a function called “generateMultiplicationTable” that accepts 2 variables as input, the first being the number that we want to calculate it’s multiples while the second one is a number that stands for the highest multiple to be generated from 1. Print to the console multiplication table for the first variable from 1 to the second variable 

function generateMultiplicationTable(number, limit) {
    // Loop from 1 to the limit
    for (let i = 1; i <= limit; i++) {
      
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }
  
  
  generateMultiplicationTable(7, 10);
  