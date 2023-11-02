/*
Filename: ComplexExample.js
Description: This code demonstrates an elaborate and complex JavaScript program that combines various concepts and functionalities.
*/

// This function checks whether a number is prime or not
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// This function generates an array of prime numbers up to a given limit
function generatePrimes(limit) {
  const primes = [];
  
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

// This object represents a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// This class represents a car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  startEngine() {
    console.log(`Starting the engine of ${this.make} ${this.model} (${this.year})...`);
    // Some complex engine starting logic goes here
  }
  
  drive() {
    console.log(`Driving ${this.make} ${this.model} (${this.year})...`);
    // Some complex driving logic goes here
  }
  
  stopEngine() {
    console.log(`Stopping the engine of ${this.make} ${this.model} (${this.year})...`);
    // Some complex engine stopping logic goes here
  }
}

// Example usage of the code
const primes = generatePrimes(100);
console.log("Prime numbers up to 100:", primes);

const john = new Person("John", 30);
john.sayHello();

const myCar = new Car("Toyota", "Camry", 2022);
myCar.startEngine();
myCar.drive();
myCar.stopEngine();
