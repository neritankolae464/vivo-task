/*
   FILENAME: ComplexCode.js
   DESCRIPTION: This code demonstrates a complex algorithm for finding prime numbers
*/

// Function to check if a given number is prime
function isPrime(num) {
   if (num <= 1) return false;
   if (num <= 3) return true;

   if (num % 2 === 0 || num % 3 === 0) {
      return false;
   }

   let i = 5;
   while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
         return false;
      }
      i += 6;
   }

   return true;
}

// Function to generate prime numbers up to a given limit
function generatePrimeNumbers(limit) {
   const primes = [];

   for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
         primes.push(i);
      }
   }

   return primes;
}

// Finding primes up to limit 1000
const primeNumbers = generatePrimeNumbers(1000);

// Printing the prime numbers
console.log("Prime Numbers up to 1000:");
console.log(primeNumbers);

// Function to calculate the sum of an array
function calculateSum(arr) {
   let sum = 0;
   for (let num of arr) {
      sum += num;
   }
   return sum;
}

// Calculating the sum of prime numbers
const sumOfPrimes = calculateSum(primeNumbers);

// Printing the sum
console.log("\nSum of Prime Numbers up to 1000:");
console.log(sumOfPrimes);

// Function to find the number of prime numbers between two limits
function countPrimes(start, end) {
   let count = 0;
   for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
         count++;
      }
   }
   return count;
}

// Counting primes between 1000 and 2000
const primeCount = countPrimes(1000, 2000);

// Printing the count
console.log("\nNumber of Prime Numbers between 1000 and 2000:");
console.log(primeCount);

// Function to reverse a string
function reverseString(str) {
   return str.split("").reverse().join("");
}

// Reversing the filename
const reversedFilename = reverseString("ComplexCode.js");

// Printing the reversed filename
console.log("\nReversed Filename:");
console.log(reversedFilename);

// Function to calculate the factorial of a number
function factorial(num) {
   if (num === 0 || num === 1) {
      return 1;
   } else {
      return num * factorial(num - 1);
   }
}

// Calculating factorial of 10
const factorialOf10 = factorial(10);

// Printing the factorial
console.log("\nFactorial of 10:");
console.log(factorialOf10);

// More complex and elaborate code can be added below...
// ...
// ...