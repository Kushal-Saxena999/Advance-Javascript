// Task 1: Creating a Simple Generator

// Create a generator function numberGenerator() that yields numbers from 1 to 3.



// Task 2: Create a Custom Iterator

// Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.

// Each call to .next() should return the next number in the range until it reaches end.



// Task 3: Generator Function for Fibonacci Sequence

// Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).

// Use the next() method to get the next Fibonacci number.


// Generator function that yields numbers from 1 to 3


//1st way
function* numberGenerator() {
  for (let i = 1; i <= 3; i++) {
      yield i; // Yield the current number
  }
}

// Example usage:
const numGen = numberGenerator();
console.log(numGen.next().value); // Output: 1
console.log(numGen.next().value); // Output: 2
console.log(numGen.next().value); // Output: 3
console.log(numGen.next().value); // Output: undefined (no more values)


// Custom iterator that returns an object iterating over numbers from start to end
function rangeIterator(start, end) {
  let current = start; // Initialize current value

  return {
      next: function() {
          if (current <= end) {
              return { value: current++, done: false }; // Return current value and increment
          } else {
              return { value: undefined, done: true }; // Indicate iteration is complete
          }
      }
  };
}

// Example usage:
const range = rangeIterator(1, 5);
console.log(range.next()); // Output: { value: 1, done: false }
console.log(range.next()); // Output: { value: 2, done: false }
console.log(range.next()); // Output: { value: 3, done: false }
console.log(range.next()); // Output: { value: 4, done: false }
console.log(range.next()); // Output: { value: 5, done: false }
console.log(range.next()); // Output: { value: undefined, done: true } (iteration complete)



// Generator function that yields numbers from the Fibonacci sequence indefinitely
function* fibonacciGenerator() {
  let a = 1, b = 1; // Initialize the first two Fibonacci numbers
  while (true) { // Infinite loop to yield Fibonacci numbers indefinitely
      yield a; // Yield the current Fibonacci number
      [a, b] = [b, a + b]; // Update to the next Fibonacci numbers
  }
}

// Example usage:
const fibGen = fibonacciGenerator();
console.log(fibGen.next().value); // Output: 1
console.log(fibGen.next().value); // Output: 1
console.log(fibGen.next().value); // Output: 2
console.log(fibGen.next().value); // Output: 3
console.log(fibGen.next().value); // Output: 5
console.log(fibGen.next().value); // Output: 8




//2nd Way


function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
 
function rangeIterator(start, end) {
  let current = start;
  return {
    next: function() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}
 
function* fibonacciGenerator() {
  let a = 1, b = 1;
  yield a;
  yield b;
  while (true) {
    let next = a + b;
    yield next;
    a = b;
    b = next;
  }
}